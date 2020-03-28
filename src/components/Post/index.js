import React from 'react';

import Comment from '../Comment';
import './style.css'

function Post() {
  return (
    <div className="post">
      <h1>post</h1>
      <Comment />
    </div>
  )
}

export default Post;
