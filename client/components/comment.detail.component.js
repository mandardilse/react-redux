import React, { Component } from 'react'

export class CommentDetails extends Component {
    render() {
        var comment = this.props.comment;
        return (
            <div className="card">
                <div className="card-body">
                    {comment.text}
                </div>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                        {comment.user}
                    </small>
                </footer>
            </div>
        )
    }
}
