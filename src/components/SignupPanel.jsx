import React, { Component } from 'react'

import './styles/signup_panel.css'

export default class SignupPanel extends Component {
    render () {
        return (
            <form 
              class="login-panel signup-panel" 
              style={{ display: !this.props.visible ? "none" : "flex" }}>

              <input 
                  type="email" 
                  placeholder="Email..."
                  name="email"
                />

              <input 
                  type="password" 
                  placeholder="Contraseña..." 
                  name="password" 
                />

                <input 
                  type="password" 
                  placeholder="Confirmar contraseña..." 
                  className="cuadro texto"
                  name="password" 
                />

              <input 
                  type="submit" 
                  className="cuadro iniciar_sesion" 
                  value="Registrarse"
                />
            </form>
        )
    }
}
