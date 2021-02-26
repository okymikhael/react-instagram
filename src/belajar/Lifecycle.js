import React, { Component } from "react";
import Unmount from "./Unmount.js";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
        makanan: 'Babi',
        data: [],
        openPage: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
          this.setState({
            data: json
          });
      });
  }

  nameChanges = (value) => {
    this.setState({
        makanan: value
    })
  }

  render() {
    return (
        <div> 
            <h1> Hellow {this.state.makanan} </h1>

            {this.state.openPage && <Unmount nameChanges={(value) => this.nameChanges(value)} />}

            <button onClick={() => this.setState({openPage: !this.state.openPage})}>Changes</button>
        </div>
    );
  }
}
