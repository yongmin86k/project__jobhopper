import React, { Component } from "react";
import Post from "./Post";

class PostContainer extends Component {
  render() {
    return (
      <section className="sectionWithMenuBar">
        <Post />
      </section>
    );
  }
}

export default PostContainer;
