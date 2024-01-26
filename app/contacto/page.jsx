import React from 'react'
import "./contacto.css"
const Contacto = () => {
  return (
    <>
    <h1>Iniciar Sesion</h1>
    <form name='contacto' hidden data-netlify="true" netlifly-honeypot="bot-field">
    <input type="text" name='usuario' />
    <input type="password" name='contraseña' />
    </form>
    
    <form method='post' className="formulario">
      <label>
        Usuario:
        <input type="text" name='usuario' />
      </label>
      <label>
        Contraseña:
        <input type="password" name='contraseña' />
      </label>
      <input type="hidden" name='form-name' value="usuario" />
      
      <input type="submit" value="Ingresar" />
    </form>
    
    </>
  )
}

export default Contacto