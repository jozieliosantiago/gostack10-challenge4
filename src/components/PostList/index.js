import React, { Component } from 'react';

import Post from '../Post';
import './style.css'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Joziélio Santiago",
          avatar: "https://avatars1.githubusercontent.com/u/13645242?s=60&v=4"
        },
        date: "05 Jan 2020",
        content: "Alguém sabe onde encontro aulas sobre node e React?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
            },
            content: "A Rocketseat disponibiliza aulas no Youtube e realiza a semana omnistack. Além disso possui o bootcamp, onde você pode encontrar ainda mais conteúdos, abordados de forma mais detalhada"
          },
          {
            id: 2,
            author: {
              name: "Luke Morales",
              avatar: "https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4"
            },
            content: "A Rocketseat possui bastante conteúdo"
          },
          {
            id: 3,
            author: {
              name: "Hudson Melo",
              avatar: "https://avatars3.githubusercontent.com/u/19855734?s=460&u=80ff086d0f5ca7a66fd1df3ccc63f45d92f4e1f3&v=4"
            },
            content: "Confia nos caras que é sucesso!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Joziélio Santiago",
          avatar: "https://avatars1.githubusercontent.com/u/13645242?s=60&v=4"
        },
        date: "05 Jan 2020",
        content: "Alguém sabe onde encontro aulas sobre node e React?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4"
            },
            content: "A Rocketseat disponibiliza aulas no Youtube e realiza a semana omnistack. Além disso possui o bootcamp, onde você pode encontrar ainda mais conteúdos, abordados de forma mais detalhada"
          },
          {
            id: 2,
            author: {
              name: "Luke Morales",
              avatar: "https://avatars2.githubusercontent.com/u/14251143?s=460&u=340ed1d854bbacc22b9a3210a18a1f589a28bc40&v=4"
            },
            content: "A Rocketseat possui bastante conteúdo "
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div className="post-list">
        <div className="content">
          {this.state.posts.map(post => <Post post={post} key={post.id} />)}
        </div>
      </div>
    )
  }
}

export default PostList;
