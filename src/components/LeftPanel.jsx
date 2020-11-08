import React, { Component } from 'react'

import './styles/left_panel.css'

export default class LeftPanel extends Component {
    render () {
        return (
            <div className="left-panel">
              <div className="group">
                <div className="images"></div>
                <div className="images"></div>
                <div className="images"></div>
            </div>
              <input type="text" className="input" placeholder="Punto de origen..."/>

              <div className="apartado">

                <p class="destino"><b>Destinos</b></p>

                <div class="images">

                  <p class="destino number"><b>1</b></p>

                </div>

                <input 
                type="text" 
                className="input destinos"
                placeholder="Destino..."
                />

                <div class="linea_d_abajo"></div>

                <div class="images images_destino_plus" onClick></div>
                
              </div>

              <input 
                type="submit"
                value="Cotizar"
                />
            </div>
        )
    }
}