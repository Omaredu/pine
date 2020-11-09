import React, { Component } from 'react'

import './styles/quantity_input.css'

export default class QuantityInput extends Component {
    render () {
        return (
            <div className="quantity-input">
                <p>Carga (Toneladas)</p>
                <input type="number" placeholder="00.00" />
            </div>
        )
    }
}