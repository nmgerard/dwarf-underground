import React, { Component } from 'react'

class Ads extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Ads