import React, { Component } from "react";
import Comment from "./components/Comment";

class App extends Component {
  state = {
    name: "Ryu",
    age: 30,
    ninjas: [
      { name: "Para", age: 30 },
      { name: "Pete", age: 32 },
      { name: "Nick", age: 31 },
    ],
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", this.state);
  };

  render() {
    return (
      <div className="app-content container">
        <Comment></Comment>
      </div>
    );
  }
}

export default App;
