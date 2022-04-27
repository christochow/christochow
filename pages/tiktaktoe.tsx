import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../styles/Tiktaktoe.module.scss';
import useGame from '../hooks/useGame';
import { Button, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const SelectStyles = {backgroundColor: 'white', borderColor: 'black', marginLeft: '5px'};

const TikTakToe = () => {
    const [setUpDone, setSetUpDone] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<string>('novice');
    const [turn, setTurn] = useState<string>('X');
    const [player, setPlayer] = useState<string>('X');
    const [isVisible, setVisible] = useState<boolean>(false);
    const [result, setResult] = useState<String>('');
    const nodeRef = useRef<HTMLDivElement>(null);
    const game = useGame(turn, player, difficulty, setTurn, setResult);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);

    const startGame = () => {
        setSetUpDone(true);
        game.startGame();

    }

    const resetGame = () => {
        setSetUpDone(false);
        setPlayer('X');
        setResult('');
        setTurn('X');
        setDifficulty('novice');
        game.resetGame();
    }
    return (
        <div className={styles.container}>
            <CSSTransition nodeRef={nodeRef} in={isVisible} timeout={1000} classNames="vertical-transition" unmountOnExit>
                <div ref={nodeRef}>
                    <h1>TikTakToe!</h1>
                    {!setUpDone &&
                        <div>
                            <div className={styles["setting-container"]}>
                                <div>
                                    Choose your side:
                                    <Select
                                        value={player}
                                        onChange={(e: SelectChangeEvent) => {
                                            const val = e.target.value;
                                            const playFirst = turn === player;
                                            if (val === 'X') {
                                                setTurn(playFirst ? 'X' : 'O');
                                            } else {
                                                setTurn(playFirst ? 'O' : 'X');
                                            }
                                            setPlayer(e.target.value);
                                        }}
                                        sx={SelectStyles}
                                    >
                                        <MenuItem value="X">X</MenuItem>
                                        <MenuItem value="O">O</MenuItem>
                                    </Select>
                                </div>
                                <div>
                                    Choose your difficulty:
                                    <Select
                                        value={difficulty}
                                        onChange={(e: SelectChangeEvent) => setDifficulty(e.target.value)}
                                        sx={SelectStyles}
                                    >
                                        <MenuItem value="beginner">Beginner</MenuItem>
                                        <MenuItem value="novice">Novice</MenuItem>
                                        <MenuItem value="master">Master</MenuItem>
                                    </Select>
                                </div>
                                <div>
                                    Who should play first:
                                    <Select
                                        value={turn}
                                        onChange={(e: SelectChangeEvent) => setTurn(e.target.value)}
                                        sx={SelectStyles}
                                    >
                                        <MenuItem value={player}>You</MenuItem>
                                        <MenuItem value={player === 'X' ? 'O' : 'X'}>AI</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <Button variant="contained" sx={{color: "black",  backgroundColor: 'white'}} onClick={startGame}>Start Game!</Button>
                        </div>}
                    {setUpDone &&
                        <div className={styles["game-container"]}>
                            {`Let's start! Your side is ${player}`}
                            <br></br>
                            <h3>{result === '' ? `Current turn: ${turn} (${turn === player ? "You" : "AI"})` : result}</h3>
                            <Grid className={`${styles.board} ${turn !== player ? styles.disabled : ''}`} container>
                                {
                                    game.board?.map((e, i) => {
                                        return (
                                            <Grid xs={4} key={i} onClick={() => turn === player ? game.humanMove(i) : null}>
                                                {e}
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            <div><Button variant="contained" sx={{color: "black", backgroundColor: 'white'}} onClick={resetGame}>Reset Game</Button></div>
                        </div>

                    }
                </div>
            </CSSTransition>
        </div>
    );
}

export default TikTakToe;
