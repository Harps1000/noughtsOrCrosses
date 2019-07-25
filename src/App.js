import React from "react";
import logo from "./logo.svg";
import "./index.css";

class App extends React.Component {
  state = {
    board: ["nought", "nought", "cross", null, null, null, null, null, null,]
  };

  render() {
    return (
     <div className="container">
       {this.state.board.map((square, i)=>{
         return <div className={`square${i} ${square}`} onClick={ square && this.updateSquare(i)} ></div> 
       })}
     </div>
    );
  }

  updateSquare = (i) =>{
    this.setState((currentState) => {
      currentState.board[i] = 'cross';
      console.log(currentState);
      return currentState;
    })
  }

 
}
export default App;
