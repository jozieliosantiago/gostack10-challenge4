import React from 'react';

import './style.css'

function Comment({ comment }) {
  const { author, content } = comment;

  return (
    <div className="comment">
      <div className="avatar">
        <img src={author.avatar} />
      </div>
      <div className="comment-text">
        <p>
          <strong>{author.name} </strong>
          {content}
        </p>
      </div>
    </div>
  )
}

export default Comment;
