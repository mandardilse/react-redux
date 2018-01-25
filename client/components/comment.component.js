import React, { Component } from 'react';
import { CommentDetails } from './comment.detail.component';


export class CommentComponent extends Component {
    constructor() {
        super();
    }
    render() {
        var comments = this.props.comments.map((c, i) => { return <CommentDetails comment={c} key={i} /> });
        return (
            <div className="card">
                <div className="card-body">
                    {comments}
                </div>
            </div>
        );
    }
}