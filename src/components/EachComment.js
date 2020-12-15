import React from "react";
import moment from "moment";

const EachComment = (props) => {
  const commentList = props.comments.map((comment, i) => {
    return (
      <div className="card blue-grey darken-1" key={i}>
        <div className="card-content white-text">
          <span className="card-title">{comment.topic}</span>
          <p>{comment.content}</p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s2">
              <i className="material-icons">star</i>

              {comment.rating}
            </div>

            <div className="col s5 center">Posted By: {comment.name}</div>
            <div className="col s5">
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
