import React, { Component } from "react";
import ButtonCard from "./Components/ButtonCard";
import Directions from "./Components/Directions";
import "./App.css";
import students from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      foundData: []
    };
  }
  // Write you findData function here
  findData = () => {
    const list = this.state.data;
    const found = [];
    for (let i = 0; i < list.length; i++) {
      console.log(list[i].name);
      if (list[i].name.indexOf("M") == 0) {
        found.push(list[i].name);
      }
    }
    console.log(found);
    this.setState({ foundData: found });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>Processing Data</h1>
        <Directions />
        <button
          type="button"
          class="btn btn-primary"
          onclick={() => {
            this.findData();
          }}
        >
          Find M Names
        </button>
        <div>
          {/* Print out found data here */}
          {this.state.foundData.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="grid">
          {this.state.data.map((student) => (
            <ButtonCard student={student} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
