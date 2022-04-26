import { useCallback, useEffect, useMemo, useState } from "react";
import AI from "../components/Tiktaktoe/AI";
import { State } from "../components/Tiktaktoe/Game";

const useGame = (turn: string, player: string, difficulty: String, setTurn: (t: string) => void, setResult: (r: String) => void) => {
    const [gameState, setGameState] = useState<State | null>(null);
    const [board, setBoard] = useState<String [] | null | undefined>(null);
    const ai = useMemo(() => AI(), []);
    const startGame = () => {
        setGameState(new State(turn, player, null));
    };
    const resetGame = () => setGameState(null);
    const applyAction = useCallback((pos: number)=>{
        if (!gameState) {
            throw new Error();
        }
        let result = gameState.applyAction(pos);
        setTurn(turn === "X" ? "O" : "X");
        return result;
    }, [gameState, setTurn, turn])

    const aiMove = useCallback(()=>{
        const applyAIAction = () => {
            let aiPos = ai.makeMove(difficulty, gameState);
            return applyAction(aiPos);
        }
        setTimeout(()=>{
            let aiResult = applyAIAction();
            if(aiResult!=="running"){
                setResult(aiResult);
            }
        },2000);
    }, [ai, applyAction, difficulty, gameState, setResult]);

    const humanMove = useCallback((pos: number) => {
        let humanResult = applyAction(pos);
        if (humanResult !== "running") {
            setResult(humanResult);
            return;
        }
    }, [applyAction, setResult])

    useEffect(() => {
        setBoard(gameState?.getBoard());
    }, [gameState, turn]);
    useEffect(() => {
        if (gameState && turn !== player) {
            aiMove();
        }
    }, [gameState, turn, player, aiMove]);
    return {
        startGame,
        resetGame,
        board,
        applyAction,
        aiMove,
        humanMove,
        gameState
    }
}

export default useGame;