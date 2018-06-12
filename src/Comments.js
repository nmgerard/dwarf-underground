import React, { Component } from 'react'

class Comments extends Component {

    render() {
        function handleClick(e) {
            e.preventDefault();
               console.log('The link was clicked');
               <form>
                   <input type="text" name="name" placeholder="Enter a comment..."/>
                   <input type="submit" value="Submit" />
               </form>
           }
        return (
            <a className="article-link" href="#" onClick={handleClick}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
        </a>
        )
    }
}

export default Comments