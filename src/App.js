import React, { Component } from 'react';

export default class App extends Component {
          
  render () {
    return (
      <div>
        <body>
          <div class="rectangulo">
            <button class="button button1" type="button">Iniciar Sesión</button>

            <button class="button button2" type="button">Registrarte</button>

            <div class="cuadro_inicial">

              <div class="cuadro">Email</div>

              <div class="cuadro">Contraseña</div>

              <button type="button" class="cuadro iniciar_sesion">Iniciar Sesión</button>

              <div class="password"><u>¿Olvidaste tu contraseña?</u></div>

            </div>
            <div class="cuadro_inicial izq">
              <div class="images_group">
              <div class="images"></div>
              <div class="images"></div>
              <div class="images"></div>
              </div>

              <div class="cuadro button_izquierda">Punto de origen...</div>
              <div class="cuadro destinos">
                <p class="destino"><b>Destinos</b></p>
                <div class="images images_destinos">
                  <p class="images_destinos_texto"><b>1</b></p>
                </div>
                <div class="cuadro lupa">Destino</div>
                <div class="linea_pa_abajo"></div>
                <div class="images images_destino_plus" onClick></div>
              </div>

              <button type="button" class="cuadro cotizar">Cotizar</button>

            </div>
          </div>
        </body>
      </div>
    );
  }
}