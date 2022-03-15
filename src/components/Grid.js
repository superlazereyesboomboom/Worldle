import React from "react";
//import { render } from "@testing-library/react";

import "./Grid.css";
import { evaluate_Guess, evaluateGuess } from "../evaluate_guess";
import Popup from "./Win_Screen";


var m = false; //trigger set
var p = 0; // divide this number by 54 to know how many times the page has been rendered(including 1st load)
var unique_id = -1; //counter for boxes
var x=0; //who knows
var enter_tracker =1; //counter for number of guesses



class Square extends React.Component {

  constructor(props) {
  super(props);

}

    render() {
        {unique_id++}
      return (

        <button id={unique_id} style={{ backgroundColor: "black" }}
                                //need to be able to increment ID so each square is unique, but can't iterate because it is rendered everytime keyboard is pressed
          className="squared"
          onClick={() => console.log("this does nothing")}
        >
          {this.props.value}
        </button>
      );
    }

  }

  class KeySquare extends React.Component {

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
           onClick={() => this.props.onClick()} //runs  through function handleclick(this.props.value) = onClick={() => this.handleClick(this.props.value)}
           >
          {this.props.value}
        </button>
        );
      }
    }



  class Grid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(29).fill(null),
      };
    }

    renderSquare(i) {
      p++;
      return(
      <KeySquare
      value={i}
      onClick={() => this.handleClick(i)}
      />

    );
    }




    handleClick(i) { //functionality for the Grid

      const squares = this.state.squares.slice();
      //console.log(this.state.squares.slice()) ;

      if(i=='Enter' && x/enter_tracker==5){
          enter_tracker++;
        const guess =  squares.slice(x-5,x);
        const response_Feedback = evaluateGuess(['R','E', 'A', 'C','T'], guess,enter_tracker )

        if(response_Feedback === "You Win!"){


          //set as true   m = true;
          console.log("hi");

        }


      for (var z=0; z<response_Feedback.length; z++){

        var c = response_Feedback.charAt(z);
          //activate color for the button
        if (c === 'O'){
          // position in string *(1-enter_tracker)*290)+58) +(10*(1-enter_tracket))
          //every time rendered goes up by (*60). 0-60. 58-118
          // p keep trackf of renders.
          // 0 -58, 60 -118, 120 -178
          var yellow_color = ((((p/54)*60)-2) - (58-(((10*(enter_tracker-2))/58) *58)) + (z*2))

          //0/58, 5/29, 10/29, 15/29, 20/29

        console.log(document.getElementById(yellow_color));

          document.getElementById(yellow_color).style.background="#ddc98d"; //need to access button in square compenent
        }
        if (c === 'X'){
          var green_color = ((((p/54)*60)-2) - (58-(((10*(enter_tracker-2))/58) *58)) + (z*2))
          document.getElementById(green_color).style.background="#00d084";

        }
      }


          //make Squares[x-1] to squares[x-5] a string and run it through checks from evaluate_guess. == guess
          //Guess_counter == enter_tracker. Code == 5 letter word key. Guess == 5 letter word guess
          //If character is 0 and no other characters of that type in the word, then yellow should not show up on guess or any other guess.
        }

      else if(i=='delete' && (x%5 != 0 || x/enter_tracker==5)){
        x--;
        squares[x] = null;
        this.setState({squares: squares});
  }



      else if (i != 'delete'  && i != 'Enter' && x/enter_tracker!=5){
      squares[x] = i; //key get data from keyboard to show up on the GRID. Use squares[Grid index]
      this.setState({squares: squares});
      this.setState({color: "rgb(0, 191, 255)"})
      x++;

    }
    }

    renderSquared(i) { //adds button functionality to Grid
      return (



        <Square
          value={this.state.squares[i]}

       //Creates the Grid
        //add functionality to squares so that they can change color
        />

      );
    }


    render() {


      return (
        <div>

        <Popup trigger ={m}>
        <h3> You Win!</h3>
        </Popup>


        <div className = "Grids">
          <div className="board-row">
            {this.renderSquared(0)}
            {this.renderSquared(1)}
            {this.renderSquared(2)}
            {this.renderSquared(3)}
            {this.renderSquared(4)}
            </div>
            <div className="board-row">
            {this.renderSquared(5)}
            {this.renderSquared(6)}
            {this.renderSquared(7)}
            {this.renderSquared(8)}
            {this.renderSquared(9)}
          </div>
          <div className="board-row">
          {this.renderSquared(10)}
          {this.renderSquared(11)}
          {this.renderSquared(12)}
          {this.renderSquared(13)}
          {this.renderSquared(14)}
          </div>
          <div className="board-row">
          {this.renderSquared(15)}
          {this.renderSquared(16)}
          {this.renderSquared(17)}
          {this.renderSquared(18)}
          {this.renderSquared(19)}
            </div>
          <div className="board-row">
          {this.renderSquared(20)}
          {this.renderSquared(21)}
          {this.renderSquared(22)}
          {this.renderSquared(23)}
          {this.renderSquared(24)}
          </div>
                <div className="board-row">
          {this.renderSquared(25)}
          {this.renderSquared(26)}
          {this.renderSquared(27)}
          {this.renderSquared(28)}
          {this.renderSquared(29)}
          </div>
        </div>

        <div className = "keyboard">
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
        </div>
      );
    }
  }


export default Grid;
