import React from 'react';

import Comment from '../Comment';
import './style.css'

function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">
          <img src="https://avatars1.githubusercontent.com/u/13645242?s=60&v=4" />
        </div>
        <div className="post-info">
          <p>Joziélio Santiago</p>
          <span><small>28 Mar 2020</small></span>
        </div>
      </div>
      <div className="post-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolores provident, architecto dolor qui consequuntur sapiente molestias quisquam. Exercitationem suscipit quisquam ad fugit asperiores in quidem placeat dolorem odit quam.
      </div>
      <Comment />
    </div>
  )
}

export default Post;
