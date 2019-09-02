import React, { Component } from "react";
import PropTypes from "prop-types";

import Comment from "./../Comment";
import NewComment from "./../NewComment";

export default function Post({ data, onComment }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={data.author.avatar} />
        <div>
          <span>{data.author.name}</span>
          <small>{data.date}</small>
        </div>
      </div>
      <p className="post-content">{data.content}</p>
      <hr />

      <div className="like">
        {data.liked == true}
        <i className="material-icons-outlined">thumb_up_alt</i>{" "}
        <span>Curtiu</span>
      </div>

      <hr />
      <div>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}

        <NewComment onComment={onComment} idPost={data.id} />
      </div>
    </div>
  );
}

Post.propType = {
  onComment: PropTypes.func
};
