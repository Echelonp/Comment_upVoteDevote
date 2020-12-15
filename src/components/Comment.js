import React, { Component } from "react";
import Eachcomment from "./EachComment";
import AddComment from "./AddComment";
import uuid from "react-uuid";

class Comment extends Component {
  state = {
    comments: [
      {
        name: "para",
        topic: "1 blah blah blah...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 5,
        time: new Date(),
        id: uuid(),
      },
      {
        name: "para 2",
        topic: "2 blah blah blah...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        time: new Date(),
        id: uuid(),
      },
      {
        name: "para 3",
        topic: "3 blah blah blah...",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 3,
        time: new Date(),
        id: uuid(),
      },
    ],
  };

  addComment = (comment) => {
    let newComment = {
      name: comment.name,
      topic: comment.topic,
      content: comment.content,
      rating: 0,
      time: new Date(),
      id: uuid(),
    };
    let newComments = [newComment, ...this.state.comments].sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log("newComments", newComments);
    this.setState({
      comments: newComments,
    });
  };
  upVote = (id) => {
    // console.log("Hello from upVote", id);
    const commentsWithId = this.state.comments.filter((eachComment) => {
      return eachComment.id === id;
    });
    const commentsWithoutId = this.state.comments.filter((eachComment) => {
      return eachComment.id !== id;
    });
    // console.log("commentsWithId", commentsWithId);
    // console.log("commentsWithoutId", commentsWithoutId);

    const newCommentsWithId = {
      name: commentsWithId[0].name,
      topic: commentsWithId[0].topic,
      content: commentsWithId[0].content,
      rating: commentsWithId[0].rating + 1,
      time: commentsWithId[0].time,
      id: commentsWithId[0].id,
    };
    let comments = [...commentsWithoutId, newCommentsWithId].sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else {
        return -1;
      }
    });
    // console.log("comments", comments);
    this.setState({
      comments,
    });
  };

  deVote = (id) => {
    // console.log("Hello from upVote", id);
    const commentsWithId = this.state.comments.filter((eachComment) => {
      return eachComment.id === id;
    });
    const commentsWithoutId = this.state.comments.filter((eachComment) => {
      return eachComment.id !== id;
    });
    // console.log("commentsWithId", commentsWithId);
    // console.log("commentsWithoutId", commentsWithoutId);

    const newCommentsWithId = {
      name: commentsWithId[0].name,
      topic: commentsWithId[0].topic,
      content: commentsWithId[0].content,
      rating: commentsWithId[0].rating - 1,
      time: commentsWithId[0].time,
      id: commentsWithId[0].id,
    };
    let comments = [...commentsWithoutId, newCommentsWithId].sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else {
        return -1;
      }
    });
    // console.log("comments", comments);
    this.setState({
      comments,
    });
  };

  render() {
    return (
      <div>
        <AddComment addComment={this.addComment}></AddComment>
        <Eachcomment
          comments={this.state.comments}
          upVote={this.upVote}
          deVote={this.deVote}
        ></Eachcomment>
      </div>
    );
  }
}

export default Comment;
