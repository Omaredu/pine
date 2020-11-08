import React, { Component } from 'react'

export default class LoginPanel extends Component {
    render () {
        return (
            <form class="cuadro_inicial">

              <input 
                type="email" 
                placeholder="Email..." 
                className="cuadro texto" 
                name="email"
                />

              <input 
                type="password" 
                placeholder="Contraseña..." 
                className="cuadro texto"
                name="password" 
                />

              <input 
                type="submit" 
                className="cuadro iniciar_sesion" 
                value="Iniciar Sesión"
                />

              <div class="password"><u>¿Olvidaste tu contraseña?</u></div>

            </form>
        )
    }
}