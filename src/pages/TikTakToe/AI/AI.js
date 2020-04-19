import {fromState} from '../Game/State';

export default function AI(){

    this.makeMove = (difficulty, state)=>{
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

    let makeSubOptimalMove = (state)=>{
        return calcMinMax('min', state)[0];
    }

    let makeOptimalMove = (state)=>{
        return calcMinMax('max', state)[0];
    }

    let calcMinMax = (minOrMax, state)=>{
        let pos=-1;
        let val = minOrMax === 'min' ? 1000 : -1000;
        state.getAvailablePos().forEach(e=>{
            let newState = fromState(state);
            let applyActionResult = newState.applyAction(e);
            let result;
            if(applyActionResult === 'running'){
                result = calcMinMax(minOrMax === 'min'?'max':'min', newState);
            } else {
                result = [e, lossFunction(applyActionResult, newState.aiMoves)];
            }
            if((minOrMax === 'min' && result[1] < val) ||
            (minOrMax === 'max' && result[1] > val)){
                    val = result[1];
                    pos = e;
            }
        });
        return [pos, val];
    }

    let lossFunction = (result, aiMoves)=>{
        if(result.includes("AI")){
            return 10-aiMoves;
        } else if(result.includes("Human")){
            return -10+aiMoves;
        }
        return 0;
    }
}
