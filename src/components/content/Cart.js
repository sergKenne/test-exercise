
import React, { Component } from 'react'

export class Cart extends Component {
    
    render() {
        return (
            <div className={this.props.bgc? "cart dark" : "cart"}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Cart
