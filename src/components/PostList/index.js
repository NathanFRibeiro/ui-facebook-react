import React, { Component } from "react";

import Post from "../Post";
import NewPost from "../NewPost";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vanessa Romero",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        liked: true,
        date: "04 Jun 2019",
        content: "Flamengo campeão da libertadores!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=15"
            },
            date: "04 Jun 2019",
            content: "Uma vez Flamengo, Flamengo até morrer!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Joaquim Lisboa",
          avatar: "https://i.pravatar.cc/150?img=60"
        },
        liked: false,
        date: "04 Jun 2019",
        content: "Hoje tá muito calor!!!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=52"
            },
            date: "04 Jun 2019",
            content: "Calor é pouco kkkkkk"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=15"
            },
            date: "04 Jun 2019",
            content: "Uma vez Flamengo, Flamengo até morrer!"
          }
        ]
      }
    ]
  };

  CreatePost = data => {
    const maxId = Math.max.apply(
      Math,
      this.state.posts.map(function(o) {
        return o.id;
      })
    );
    console.log(maxId);

    const post = {
      id: maxId + 1,
      author: {
        name: "Nathan Ribeiro",
        avatar: "https://i.pravatar.cc/150?img=54"
      },
      date: "30 Ago 2019",
      content: data,
      comments: []
    };

    this.setState({
      posts: [...this.state.posts, post]
    });
  };

  CreateComment = (id, content) => {
    const allPosts = this.state.posts.slice();
    const selected = allPosts.filter(post => post.id == id);

    console.log(selected);

    const maxId = Math.max.apply(
      Math,
      selected[0].comments.map(function(o) {
        return o.id;
      })
    );
    console.log(maxId);

    const comment = {
      id: maxId + 1,
      author: {
        name: "Nathan Ribeiro",
        avatar: "https://i.pravatar.cc/150?img=54"
      },
      date: "04 Jun 2019",
      content: content
    };

    const idx = this.getIndex(id, allPosts, "id");

    selected[0].comments.push(comment);

    allPosts[idx] = selected[0];

    this.setState({
      posts: allPosts
    });
  };

  getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }

  render() {
    return (
      <ul className="postlist">
        <NewPost onCreate={this.CreatePost}></NewPost>
        {this.state.posts
          .sort((a, b) => b.id - a.id)
          .map(post => (
            <Post
              onComment={this.CreateComment}
              key={post.id}
              data={post}
            ></Post>
          ))}
      </ul>
    );
  }
}
