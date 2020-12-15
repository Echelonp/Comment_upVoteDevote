import React, { Component } from "react";
import Eachcomment from "./EachComment";
import AddComment from "./AddComment";

class Comment extends Component {
  state = {
    comments: [
      {
        name: "para",
        topic: "blah blah blah...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 5,
        time: new Date(),
      },
      {
        name: "para 2",
        topic: "blah blah blah...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        time: new Date(),
      },
      {
        name: "para 3",
        topic: "blah blah blah...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 3,
        time: new Date(),
      },
    ],
  };
  handleClick = () => {
    console.log("Hello from Button");
  };
  addComment = (comment) => {
    console.log("Comment", comment);
  };

  render() {
    return (
      <div>
        <AddComment addComment={this.addComment}></AddComment>
        <Eachcomment comments={this.state.comments}></Eachcomment>
      </div>
    );
  }
}

export default Comment;
