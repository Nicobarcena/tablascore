import React from 'react'
import "./contacto.css"
const Contacto = () => {
  return (
    <>
    <h1>Iniciar Sesion</h1>
    <form method='post' className="formulario">
      <label>
        Usuario:
        <input type="text" name='usuario' />
      </label>
      <label>
        Contraseña:
        <input type="password" name='contraseña' />
      </label>
      <input type="submit" value="Ingresar" />
    </form>
    
    </>
  )
}

export default Contacto