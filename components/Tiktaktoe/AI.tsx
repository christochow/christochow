import {State} from './Game';

const AI = () => {

    const makeMove = (difficulty: String, state: State | null) => {
        if (!state) {
            throw new Error();
        }
        switch(difficulty){
            case 'beginner':
                return makeSubOptimalMove(state);
            case 'master':
                return makeOptimalMove(state);
            default:
                {
                    let rand = Math.floor(Math.random() * Math.floor(2));
                    if(rand > 0) {
                        return makeOptimalMove(state);
                    }
                    return makeSubOptimalMove(state);
                }
        }
    }

    const makeSubOptimalMove = (state: State)=>{
        return calcMinMax('min', state)[0];
    }

    const makeOptimalMove = (state: State)=>{
        return calcMinMax('max', state)[0];
    }

    const calcMinMax = (minOrMax: String, state: State) => {
        let pos=-1;
        let val = minOrMax === 'min' ? 1000 : -1000;
        state.getAvailablePos().forEach(e=>{
            let newState = state.clone();
            let applyActionResult = newState.applyAction(e);
            let result;
            if(applyActionResult === 'running'){
                result = calcMinMax(minOrMax === 'min'?'max':'min', newState);
            } else {
                result = [e, lossFunction(applyActionResult, newState.getAIMoves())];
            }
            if((minOrMax === 'min' && result[1] < val) ||
            (minOrMax === 'max' && result[1] > val)){
                    val = result[1];
                    pos = e;
            }
        });
        return [pos, val];
    }

    const lossFunction = (result: String, aiMoves: number)=>{
        if(result.includes("AI")){
            return 10-aiMoves;
        } else if(result.includes("Human")){
            return -10+aiMoves;
        }
        return 0;
    }

    return {
        lossFunction,
        calcMinMax,
        makeOptimalMove,
        makeSubOptimalMove,
        makeMove
    }
}

export default AI;
