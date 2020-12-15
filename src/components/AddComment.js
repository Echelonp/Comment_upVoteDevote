import React, { Component } from "react";

class AddComment extends Component {
  state = {
    name: null,
    topic: null,
    content: null,
    rating: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(this.state);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <form className="form">
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                id="topic"
                onChange={this.handleChange}
                className="input"
              ></input>

              <label htmlFor="content">Comment</label>
              <input
                type="text"
                id="content"
                onChange={this.handleChange}
                className="input"
              ></input>

              <label htmlFor="content">Rating</label>
              <input
                type="text"
                id="rating"
                onChange={this.handleChange}
                className="input"
              ></input>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={this.handleChange}
                className="input"
              ></input>

              <button
                className="waves-effect waves-light btn right"
                onClick={this.handleSubmit}
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;
