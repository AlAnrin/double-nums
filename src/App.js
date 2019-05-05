import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        let board = [];

        this.changeBoard(20, board);

        this.state = {
            board: board,
            row: [0, 1, 2, 3, 4],
            col: [1, 2, 3, 4, 5, 6, 7, 8],
            now: -1,
            select: 20,
            canSelect: [20, 30]
        }
    }

    recurse = (board, min, max) => {
        const now = this.randomInteger(min, max);
        if (board.filter(b => b === now).length < 2) {
            board.push({num: now, isVisible: false, isOpen: false});
            return;
        }
        else this.recurse(board, min, max);
    };

    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    setNewBoard(board) {
        this.setState({
            board: board
        });
    }

    handleProps(index) {
        if (!this.state.board[index].isOpen) {
            let newBoard = this.state.board;
            newBoard[index].isVisible = true;
            this.setNewBoard(newBoard);
            if (this.state.now === -1)
                this.setState({now: index});
            else {
                if (this.state.board[this.state.now].num === this.state.board[index].num) {
                    let newBoard = this.state.board;
                    newBoard[index].isOpen = true;
                    newBoard[this.state.now].isOpen = true;
                    this.setState({now: -1});
                    this.setNewBoard(newBoard);
                }
                else {
                    setTimeout(() => {
                        let newBoard = this.state.board;
                        newBoard[index].isVisible = false;
                        newBoard[this.state.now].isVisible = false;
                        this.setState({now: -1});
                        this.setNewBoard(newBoard);
                    }, 200);
                }
            }
        }
    }

    changeBoard(max, board) {
        for (let i = 0; i < 2 * max; i++) {
            this.recurse(board, 1, max);
        }
    }

    handleSelect(select) {
        let row, col;
        if (select === 30) {
            row = [0, 1, 2, 3, 4, 5];
            col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        }
        if (select === 20) {
            row = [0, 1, 2, 3, 4];
            col = [1, 2, 3, 4, 5, 6, 7, 8];
        }
        let board = [];
        this.changeBoard(select, board);
        this.setState({board: board, select: select, row: row, col: col});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="row">
                        {
                            this.state.canSelect.map(nums =>
                                <button key={nums} onClick={() => this.handleSelect(nums)}>{nums}</button>
                            )
                        }
                    </div>
                    <div>
                        {
                            this.state.row.map(r =>
                                <div className="row" key={r}>
                                    {
                                        this.state.col.map(c =>
                                            <div className="box card" key={c}>
                                                <button className="num_button card"
                                                        onClick={() => this.handleProps(r * (this.state.row.length - 1) + c - 1)}>
                                                    {this.state.board[r * (this.state.row.length - 1) + c - 1].isVisible ?
                                                        this.state.board[r * (this.state.row.length - 1) + c - 1].num : ''}
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </header>
            </div>
        )
    }
}

export default App;
