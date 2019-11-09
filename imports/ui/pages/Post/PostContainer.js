import React, { Component } from "react";
import Post from "./Post";

class PostContainer extends Component {
  render() {
    const { currentUser, categories } = this.props;
    return (
      <section className="sectionWithMenuBar">
        <Post currentUser={currentUser} categories={categories} />
      </section>
    );
  }
}

export default PostContainer;
