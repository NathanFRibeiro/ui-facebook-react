import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NewPost extends Component {
  static propTypes = {
    onCreate: PropTypes.func
  };

  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = () => {
    this.props.onCreate(this.state.value);
    this.refs.newpost.value = "";
  };

  render() {
    return (
      <div className="new-comment">
        <textarea
          name="newpost"
          id="newpost"
          ref="newpost"
          onChange={this.handleChange}
          placeholder="O que você está pensando?"
        ></textarea>
        <button type="submit" onClick={() => this.handleSubmit()}>
          Publicar
        </button>
      </div>
    );
  }
}
