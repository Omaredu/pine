import React, { Component } from 'react'

import './styles/vehicle.css'

const vehicleIcons = [
    "bus-outline",
    "car-outline",
    "cube-outline",
]

export default class Vehicle extends Component {
    _checkName(name) {
        if (name.length > 8) {
            return name.substring(0, 5) + "..."
        } else {
            return name
        }
    }
        
    render () {
        return (
            <div onClick={this.props.add ? this.props.onClick : null} className="vehicle-container" title={this.props.name || "Vehículo"}>
                <div className="vehicle-icon">
                    {
                        !this.props.add
                        ? <ion-icon name={vehicleIcons[this.props.icon || 0]}></ion-icon>
                        : <ion-icon name="add-outline"></ion-icon>
                    }
                </div>
                <p>
                    {
                        !this.props.add
                        ? this._checkName(this.props.name) || "Vehículo"
                        : "Añadir"
                    }
                </p>
            </div>
        )
    }
} 