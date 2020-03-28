import React from 'react';

import './style.css'

function Comment() {
  const username = 'Joziélio Santiago'
  return (
    <div className="comment">
      <div className="avatar">
        <img src="https://avatars1.githubusercontent.com/u/13645242?s=60&v=4" />
      </div>
      <div className="comment-text">
        <p>
          <strong>{username}</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias neque laborum aliquid nihil praesentium veritatis tempora nisi molestias, doloremque quo, corporis, officia illum amet expedita accusamus a voluptas quibusdam incidunt.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias neque laborum aliquid nihil praesentium veritatis tempora nisi molestias, doloremque quo, corporis, officia illum amet expedita accusamus a voluptas quibusdam incidunt.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias neque laborum aliquid nihil praesentium veritatis tempora nisi molestias, doloremque quo, corporis, officia illum amet expedita accusamus a voluptas quibusdam incidunt.
        </p>
      </div>
    </div>
  )
}

export default Comment;
