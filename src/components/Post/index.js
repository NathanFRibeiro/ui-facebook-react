import React, { Component } from "react";

import Comment from "./../Comment";
import NewComment from "./../NewComment";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img src="https://api.adorable.io/avatars/65/abott@adorable.png" />
          <div>
            <span>Nome</span>
            <small>22 Ago 2019</small>
          </div>
        </div>
        <p class="post-content"> Conteúdo do post</p>
        <hr />

        <div className="like">
          <i className="material-icons">thumb_up_alt</i> <span>Curtiu</span>
        </div>

        <hr />
        <div>
          <Comment />
          <NewComment />
        </div>
      </div>
    );
  }
}
