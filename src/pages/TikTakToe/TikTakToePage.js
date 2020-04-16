import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import './TikTakToePage.css'
import AI from './AI/AI';
import {State} from './Game/State';

function Loading() {
    const [start, setStart] = useState(false);
    const [setUpDone, setSetUpDone] = useState(false);
    const [difficulty, setDifficulty] = useState('novice');
    const [board, setBoard] = useState([]);
    const [turn, setTurn] = useState(null);
    const [player, setPlayer] = useState('X');
    const [isVisible, setVisible] = React.useState(false);
    const [result, setResult] = React.useState('');
    let state = React.useRef(null);
    setTimeout(() => {
        setVisible(true);
    }, 100)

    const ai = new AI();
    const enterSetUp = () => setStart(true);
    const startGame = ()=>{
        state.current = new State(player, player);
        setTurn(player);
        setSetUpDone(true);
        setBoard([...state.current.getBoard()]);
    }

    const handleUserClick = (pos)=>{
        let humanResult = applyAction(pos);
        setTurn(state.current.turn);
        if(humanResult!=="running"){
            setResult(humanResult);
            return;
        }
        setTimeout(()=>{
            let aiResult = applyAIAction();
        setTurn(state.current.turn);
        if(aiResult!=="running"){
            setResult(aiResult);
        }
        },2000);
    }

    const applyAction = (pos)=>{
        let result = state.current.applyAction(pos);
        setBoard([...state.current.getBoard()]);
        return result;
    }

    const applyAIAction = ()=>{
        let aiPos = ai.makeMove(difficulty, state.current);
        return applyAction(aiPos);
    }
    return (
        <div className="container">
            <h1>TikTakToe!</h1>
            <CSSTransition in={isVisible} timeout={1000} classNames="vertical-transition" unmountOnExit>
                <div>
                {!start && <button onClick={enterSetUp}><h4>Start Game</h4></button>}
                {!setUpDone && start && 
                <div>
                    <div className="setting-container">                
                        <div className="side-container">
                            Choose your side:
                            <button className={player==='X'?'highlight':''} onClick={()=>setPlayer('X')}>X</button>
                            <button className={player==='O'?'highlight':''} onClick={()=>setPlayer('O')}>O</button>
                        </div>
                        <div>
                            Choose your difficulty:
                            <button className={difficulty==='beginner'?'highlight':''} onClick={()=>setDifficulty("beginner")}>
                            Beginner
                            </button>
                            <button className={difficulty==='novice'?'highlight':''} onClick={()=>setDifficulty("novice")}>
                            Novice
                            </button>
                            <button className={difficulty==='master'?'highlight':''} onClick={()=>setDifficulty("master")}>
                            Master
                            </button>
                        </div>
                    </div>
                    <button onClick={()=>startGame()}>Begin Game!</button>
                </div>}
                {setUpDone && start && <div>
                    Let's start! You will make the first move, your side is {player}
                    <br></br>
                    <h3>{result === '' ? `Current turn: ${turn}` :result}</h3>
                    <div className="board">
                    {
                        board.map((e,i)=>{
                            return (
                                <span key={i}>
                                    <button disabled={e!=="E" || turn !== player} onClick={()=>handleUserClick(i)}>{e}</button>
                                    {(i===2 || i===5 || i===8) && <br></br>}
                                </span>
                                )
                            })
                    }
                    </div>
                    </div>

                }
                </div>
            </CSSTransition>
        </div>
  );
}

export default Loading;
