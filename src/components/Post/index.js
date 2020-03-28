import React from 'react';

import Comment from '../Comment';
import './style.css'

function Post({ post }) {
  const { author, comments } = post;

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">
          <img src={author.avatar} />
        </div>
        <div className="post-info">
          <p>{author.name}</p>
          <span><small>{post.date}</small></span>
        </div>
      </div>
      <div className="post-content">
        <p>
          {post.content}
        </p>
      </div>
      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  )
}

export default Post;
