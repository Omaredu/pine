import React, { Component } from 'react'

export default class LeftPanel extends Component {
    render () {
        return (
            <div class="cuadro_inicial izq">
              <div class="images_group">
              <div class="images"></div>
              <div class="images"></div>
              <div class="images"></div>
              </div>

              <input type="text" class="cuadro button_izquierda" placeholder="Punto de origen..."/>
              <div class="cuadro destinos">
                <p class="destino"><b>Destinos</b></p>
                <div class="images images_destinos">
                  <p class="images_destinos_texto"><b>1</b></p>
                </div>
                <input type="text" class="cuadro lupa" placeholder="Destino..."/>
                <div class="linea_pa_abajo"></div>
                <div class="images images_destino_plus" onClick></div>
              </div>

              <button type="button" class="cuadro cotizar">Cotizar</button>
            </div>
        )
    }
}