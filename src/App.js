import React, { Component } from "react";
import Comment from "./components/Comment";

class App extends Component {
  render() {
    return (
      <div className="app-content container">
        <Comment></Comment>
      </div>
    );
  }
}

export default App;
