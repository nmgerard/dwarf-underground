import React, { Component } from 'react'

class ArticleHeader extends Component {
    render() {
        return (
            <div>
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <h6>
                    <div className="avatar">
                        <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
                        <div className="author-info">
                            <p className="author-name">By Domri, son of Flug</p>
                            <p className="date">on 28 April, 3018 of the Third Age</p>
                        </div>
                    </div>
                </h6>
            </div>
        )
    }
}

export default ArticleHeader