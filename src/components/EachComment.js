import React from "react";
import moment from "moment";

const EachComment = (props) => {
  const commentList = props.comments.map((comment, i) => {
    return (
      <div className="card blue-grey darken-1" key={comment.id}>
        <div className="card-content white-text">
          <span className="card-title">{comment.topic}</span>
          <p>{comment.content}</p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s4">
              <i className="material-icons">star</i>
              {comment.rating}

              <button
                className="btn-floating waves-effect waves-light red right"
                onClick={() => props.upVote(comment.id)}
              >
                <i className="material-icons">add</i>
              </button>
              <button
                className="btn-floating waves-effect waves-light black right"
                onClick={() => props.deVote(comment.id)}
              >
                <i className="large material-icons">remove</i>
              </button>
            </div>

            <div className="col s4 center">Posted By: {comment.name}</div>
            <div className="col s4">
              {moment(comment.time.toString()).calendar()}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="">{commentList}</div>;
};

export default EachComment;
