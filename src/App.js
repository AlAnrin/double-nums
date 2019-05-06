import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        let board = new Array(39).fill(null);

        this.changeBoard(20, board);

        this.state = {
            board: board,
            row: 4,
            col: 8,
            now: -1,
            select: 20,
            canSelect: [10, 15, 20, 25, 30],
            win: false
        }
    }

    changeBoard(max, board) {
        for (let i = 1; i <= max; i++) {
            this.recurse(board, i, 0, 2 * max - 1);
            this.recurse(board, i, 0, 2 * max - 1);
        }
        console.log(board);
    }

    recurse = (board, i, min, max) => {
        const now = this.randomInteger(min, max);
        if (board[now] == null) {
            board[now] = {num: i, isVisible: false, isOpen: false};
        }
        else this.recurse(board, i, min, max);
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

    winner() {
        this.setState({win: true});
    }

    handleProps(index) {
        if (!this.state.board[index].isOpen) {
            let newBoard = this.state.board;
            newBoard[index].isVisible = true;
            this.setNewBoard(newBoard);
            if (this.state.now === -1)
                this.setState({now: index});
            else {
                if (this.state.board[this.state.now].num === this.state.board[index].num && index !== this.state.now) {
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
        if (this.state.board.filter(b => b.isOpen).length === this.state.board.length)
            this.winner();
    }

    handleSelect(select) {
        let row, col;
        if (select === 30) {
            row = 5;
            col = 10;
        }
        if (select === 20) {
            row = 4;
            col = 8;
        }
        if (select === 10) {
            row = 4;
            col = 5;
        }
        if (select === 15) {
            row = 5;
            col = 6;
        }
        if (select === 25) {
            row = 5;
            col = 10;
        }
        let board = [];
        this.changeBoard(select, board);
        this.setState({board: board, select: select, row: row, col: col});
    }

    playAgain = () => {
        this.setState({win: false});
        this.handleSelect(20);
    };

    render() {
        let div = [], row = [], selRow = 0;
        for (let i = 0; i < this.state.board.length; i++) {
            if ((i - selRow * this.state.col) < this.state.col) {
                row.push(
                    <button className="num_button card box" key={i}
                            onClick={() => this.handleProps(i)}>
                        {this.state.board[i].isVisible ?
                            this.state.board[i].num : ' '}
                    </button>
                );
            }
            else {
                selRow++;
                div.push(<div className="row">{row}</div>);
                row = [];
                i--;
            }
        }
        div.push(<div className="row">{row}</div>);
        return (
            <div className="App">
                {
                    this.state.win ?
                        <header className="App-header">
                            <h1>YOU WIN</h1>
                            <button className="niceBtn" onClick={this.playAgain}>play again?</button>
                        </header>
                        :
                    <header className="App-header">
                        <div className="row">
                            {
                                this.state.canSelect.map(nums =>
                                    <button className="niceBtn" key={nums} onClick={() => this.handleSelect(nums)}>{nums}</button>
                                )
                            }
                        </div>
                        <div>
                            {
                                div
                            }
                        </div>
                    </header>
                }
            </div>
        )
    }
}

export default App;
