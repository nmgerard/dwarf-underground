import React, { Component } from 'react'

class ArticleLinks extends Component {
    render() {
        return (
            <h6>
            <div className="article-links">
                <a className="article-link" href="#">
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
            </div>
            </h6>
        )
    }
}

export default ArticleLinks