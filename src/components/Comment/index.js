import React from "react";

export default function Comment({data}) {
  return (
    <div className="post-comment">
      <img src={data.author.avatar}></img>
      <div className="comment-content">
        <p>
         {data.content}
        </p>
      </div>
    </div>
  );
}
