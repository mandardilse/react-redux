import React from 'react';
import { Link } from 'react-router';
export default class PostDetail extends React.Component {
    render() {
        return (<div className="card">
            <div className="card-header text-white bg-dark mb-3">
                <b>{this.props.post.caption}</b>
            </div>
            <div className="card-body">
                <Link to={`/singlepost/${this.props.post.code}`}>
                    <img src={this.props.post.display_src} />
                </Link>
            </div>
            <div className="card-footer text-muted">
                <button onClick={this.props.INCREMENT.bind(this, this.props.index)}><i className="fa fa-thumbs-up" aria-hidden="true"></i>{this.props.post.likes}</button>&nbsp;&nbsp;
                <button onClick={this.props.DECREMENT.bind(this, this.props.index)}><i className="fa fa-thumbs-down" aria-hidden="true"></i>{this.props.post.likes}</button>
            </div>
        </div>)

    }
}