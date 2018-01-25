import React, { Component } from 'react'
import PostDetail from './post.detail.component';
import { CommentComponent } from './comment.component';

export default class SinglePost extends Component {
  render() {
    var code = this.props.params.code;
    var index = this.props.myPosts.findIndex(p => p.code == code);
    var currentPost = this.props.myPosts.find(p => p.code == code);
    var currentComments = this.props.myComments[code] || [];
    return (
      <div>
        <PostDetail post={currentPost} index={index} key={index}  {...this.props} />
        <h4>Comments :</h4>
        <CommentComponent comments={currentComments} />
      </div>
    )
  }
}
