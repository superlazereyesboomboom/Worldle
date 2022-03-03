import React from "react";
import { render } from "@testing-library/react";

class Square extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    value: null,
  };
}

    render() {
      return (
        <button
        className="square"
         onClick={() => console.log(this.props.value)}
         >
        {this.props.value}
      </button>
      );
    }
  }

  class KeyBoard extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }

    render() {
      const status = 'WORDLE';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare('Q')}
            {this.renderSquare('W')}
            {this.renderSquare('E')}
            {this.renderSquare('R')}
            {this.renderSquare('T')}
            {this.renderSquare('Y')}
            {this.renderSquare('U')}
            {this.renderSquare('I')}
            {this.renderSquare('O')}
            {this.renderSquare('P')}
          </div>
          <div className="board-row">
          {this.renderSquare('A')}
          {this.renderSquare('S')}
          {this.renderSquare('D')}
          {this.renderSquare('F')}
          {this.renderSquare('H')}
          {this.renderSquare('J')}
          {this.renderSquare('K')}
          {this.renderSquare('L')}
          </div>
          <div className="board-row">
          {this.renderSquare('Enter')}
          {this.renderSquare('Z')}
          {this.renderSquare('X')}
          {this.renderSquare('C')}
          {this.renderSquare('V')}
          {this.renderSquare('B')}
          {this.renderSquare('N')}
          {this.renderSquare('M')}
          {this.renderSquare('delete')}
          </div>
        </div>
      );
    }
  }




export default KeyBoard;
