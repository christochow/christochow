export class State {
    _turn: String;
    _player: String;
    _pBoard: String[];
    _aiMoves: number;
    _ai: String;
    constructor(turn: String, player: String, board: String[] | null) {
        this._turn = turn;
        this._player = player;
        this._pBoard = board ? board : ["E", "E", "E", "E", "E", "E", "E", "E", "E"];
        this._aiMoves = 0;
        this._ai = player === "X" ? "O" : "X";
    }

    clone = () => new State(this._turn, this._player, this.getBoard());
    getBoard = () => [...this._pBoard];
    getAIMoves = () => this._aiMoves;

    getAvailablePos = () => {
        let available: number[] = [];
        this.getBoard().forEach((e, i) => {
            if (e === "E") {
                available.push(i);
            }
        })
        return available;
    }

    applyAction = (pos: number) => {
        this._pBoard[pos] = this._turn;
        if (this._turn === this._ai) {
            this._aiMoves++;
        }
        this._turn = this._turn === "X" ? "O" : "X";
        return this.checkResult();
    }

    checkResult = () => {
        for (let i = 0; i < 9; i = i + 3) {
            //row
            if (this._pBoard[i] === this._pBoard[i + 1]
                && this._pBoard[i + 1] === this._pBoard[i + 2] &&
                this._pBoard[i] !== "E") {
                return this.determineResult(this._pBoard[i]);
            }
        }
        for (let a = 0; a < 3; a++) {
            //column
            if (this._pBoard[a] === this._pBoard[a + 3]
                && this._pBoard[a + 3] === this._pBoard[a + 6] &&
                this._pBoard[a] !== "E") {
                return this.determineResult(this._pBoard[a]);
            }
        }
        //diagonal
        if (((this._pBoard[0] === this._pBoard[4]
            && this._pBoard[4] === this._pBoard[8])
            || (this._pBoard[2] === this._pBoard[4]
                && this._pBoard[4] === this._pBoard[6]))
            && this._pBoard[4] !== "E") {
            return this.determineResult(this._pBoard[4])
        }
        if (!this._pBoard.includes("E")) {
            return "draw"
        }
        return "running";

    }

    determineResult = (winner: String) => {
        if (winner === this._player) {
            return 'Human wins!';
        }
        return 'AI wins!';
    }
}