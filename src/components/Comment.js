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

  addComment = (comment) => {
    console.log("Comment", comment);
    let newComment = {
      name: comment.name,
      topic: comment.topic,
      content: comment.content,
      rating: comment.rating,
      time: new Date(),
    };
    let newComments = [newComment, ...this.state.comments].sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({
      comments: newComments,
    });
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
