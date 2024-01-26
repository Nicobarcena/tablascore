import React from 'react'
import "./contacto.css"
const Contacto = () => {
  return (
    <>
    <h1>Iniciar Sesion</h1>
    <form name="contacto" hidden data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="usuario" />
        <input type="password" name="contraseña" />
        <textarea name="comentarios"></textarea>
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
      <label>
                    Comentarios:
                    <textarea name="comentarios"></textarea>
                </label>
      <input type="hidden" name='form-name' value="usuario" />
      
      <input type="submit" value="Ingresar" />
    </form>
    
    </>
  )
}

export default Contacto