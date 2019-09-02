import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewComment extends Component {
  static propTypes = {
    onComment: PropTypes.func
  };

  state = {
    value: ""
  };

  handleKeyDown = e => {
    this.setState({ value: e.target.value }, () => {
      console.log("TESTE: " + e.target.value);
    });

    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    this.props.onComment(this.props.idPost, this.state.value);

    this.refs.newcomment.value = "";
  };

  render() {
    return (
      <div className="post-comment">
        <img src="https://api.adorable.io/avatars/65/abott@adorable.png"></img>
        <input
          ref="newcomment"
          type="text"
          placeholder="Escreva um comentário..."
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}
