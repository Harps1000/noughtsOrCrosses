import React from "react";
import "./index.css";

class App extends React.Component {
  state = {
    whosTurn: 'nought',
    board: [null, null, null, null, null, null, null, null, null,]
  };

  render() {
    return (
      <div className="container">
        {this.state.board.map((square, i) => {
          return <div key={i} className={`square${i} ${square}`} onClick={() => { if (!square) this.updateSquare(i) }} ></div>
        })}
      </div>
    );
  }

  updateSquare = (i) => {
    this.setState((currentState) => {
      if (this.state.whosTurn === 'nought') {
        currentState.board[i] = 'nought';
        currentState.whosTurn = 'cross';
        console.log(currentState)
        return currentState;
      }
      else {
        currentState.board[i] = 'cross';
        currentState.whosTurn = 'nought';
        console.log(currentState)
        return currentState;
      }
    })
  }

}
export default App;
