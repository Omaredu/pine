import React, { Component } from 'react'

import './styles/login_panel.css'

export default class LoginPanel extends Component {
    render () {
        return (
            <form 
              class="login-panel" 
              style={{ display: !this.props.visible ? "none" : "flex" }}>

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

              <p class="password">¿Olvidaste tu contraseña?</p>

            </form>
        )
    }
}