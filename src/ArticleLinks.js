import React, { Component } from 'react'
import Comments from './Comments'

class ArticleLinks extends Component {
    render() {
        return (
            <h6>
              
                <div className="article-links">
                    {/* <a className="article-link" href="#" onClick={handleClick}>
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a> */}
                  {this.props.children}
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