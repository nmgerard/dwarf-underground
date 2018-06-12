import React, { Component } from 'react'

class Ads extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h6>
                    <h2>From around the Realm</h2>
                    {this.props.children}
                    {/* {this.props.children.map(this.props.children, <Ads>{this.props.children}</Ads>)} */}
                </h6>
            </div>

        )
    }
}

export default Ads