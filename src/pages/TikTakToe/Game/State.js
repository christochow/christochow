module.exports.State = State;
function State(turn, player, board) {
        let pBoard = [];
        if(board!==undefined){
            pBoard = board;
        } else{
            pBoard = ["E","E","E","E","E","E","E","E","E"];
        }
        this.getBoard = ()=> pBoard;
        this.player = player;
        this.ai = this.player === "X" ? "O" : "X";
        this.turn = turn;
        this.aiMoves = 0;

    this.getAvailablePos = ()=>{
        let available = [];
        this.getBoard().forEach((e,i)=>{
            if(e==="E"){
                available.push(i);
            }
        })
        return available;
    }

    this.applyAction=(pos)=>{
        pBoard[pos] = this.turn;
        if(this.turn === this.ai){
            this.aiMoves++;
        }
        this.turn = this.turn === "X" ? "O" : "X";
        return checkResult();
    }

    let checkResult = ()=>{
        for(let i=0;i<9;i=i+3){
            //row
            if(pBoard[i]===pBoard[i+1] 
                && pBoard[i+1]===pBoard[i+2] &&
                pBoard[i] !== "E"){
                    return determineResult(board[i]);
                }
        }
        for(let a=0;a<3;a++){
            //column
            if(pBoard[a]===pBoard[a+3] 
                && pBoard[a+3]===pBoard[a+6] &&
                pBoard[a] !== "E"){
                    return determineResult(pBoard[a]);
                }
        }
        //diagonal
        if(((pBoard[0] === pBoard[4] 
            && pBoard[4] === pBoard[8]) 
            || (pBoard[2] === pBoard[4] 
                && pBoard[4] === pBoard[6]))
                && pBoard[4] !== "E"){
                return determineResult(board[4])
            }
        if(!pBoard.includes("E")){
            return "draw"
        }
        return "running";

    }

    let determineResult = (winner)=>{
        if(winner === this.player){
            return 'Human wins!';
        }
        return 'AI wins!';
    }
}
module.exports.fromState = function fromState(state){
    let newState = new State(state.turn, state.player, [...state.getBoard()]);
    newState.aiMoves = state.aiMoves
    return newState;
}