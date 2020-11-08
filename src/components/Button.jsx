import React, { Component } from 'react'

import './styles/button.css'

export default class Button extends Component {
    render () {
        return (
            <div 
                onClick={this.props.onClick} 
                className="button" 
                type="button"
                >
                    {this.props.children}
            </div>
        )
    }
}