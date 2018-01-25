import React, { Component } from 'react'
import PostDetail from './post.detail.component';

export default class AllPosts extends Component {
  render() {
    var allPost = this.props.myPosts.map((p, i) => {
      return <PostDetail post={p} index={i} key={i}  {...this.props} />
    });
    return (
      <div>
        {allPost}
      </div>
    )
  }
}
