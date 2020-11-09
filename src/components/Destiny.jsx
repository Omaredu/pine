import React, { Component } from 'react'

import './styles/destiny.css'

export default class Destiny extends Component {
    render () {
        return (
            <div className="destiny-container">
                <div className="destiny-index">
                    <p>{this.props.index || 1}</p>
                </div>
                <input type="text" onChange={this.props.value} placeholder="Destino..." />
            </div>
        )
    }
}