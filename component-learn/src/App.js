import React, { Component } from 'react';
import './button.css';

// import Chip from './Chip';


// const data = [{
//   name: "Cao ghi danh",
//   status: "Untested",
//   color: "gray"
// },
// {
//   name: "Van do dat",
//   status: "passed",
//   color:"green"
// },
// {
//   name: "Nguyen van tach",
//   status: "Failed",
//   color:"red"
// },
// ];


// const simpleData = [
//   "Cao Ghi danh",
//   "van do dat",
//   "nguyen van tach"
// ]



class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
  }

  add() {
    this.setState({
      count: this.state.count + 1
    })
  }
  sub() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <button onClick={this.add} className="button_add">+</button>
        <p>{count}</p>
        <button onClick={this.sub} className="button_sub">-</button>

      </div>
    );
  }
}


export default App;
