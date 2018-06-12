import React, { Component } from 'react'

class Ads extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.props.children}
             {/* {this.props.children.map(this.props.children, <Ads>{this.props.children}</Ads>)} */}
            </div>
        )
    }
}

export default Ads