import React, { Component } from 'react'

import './styles/create_overlay.css'

export default class CreateOverlay extends Component {    
    render () {
        return (
            <div className="create-overlay" style={{display: this.props.active ? 'flex' : 'none'}}>  
                <form className="create-panel">

                    <div><strong>Añadir unidad de transporte</strong> <div onClick={this.props.toggleCreateVehicle} className="exit" type="button">x</div></div>

                    <input 
                    type="text"
                    placeholder="Nombre"
                    className="text-input name" 
                    />

                    <div className="text-input name"> Icono <ion-icon name="bus-outline" ></ion-icon> <ion-icon name="cube-outline" ></ion-icon> <ion-icon name="car-outline"></ion-icon> </div>

                    <div> Capacidad (Toneladas)<input type="text" placeholder="0.0"className="text-input name" /> </div>

                    <div> Capacidad de tanque (Litros) <input type="text" placeholder="0.0" className="text-input name"/> </div>

                    <div> Km/L         <input type="text" placeholder="0.0" className="text-input name"/> </div>

                    <input 
                        type="submit"
                        value="Añadir"
                        className="button"
                    />
                </form>
        </div>
    )
}
}