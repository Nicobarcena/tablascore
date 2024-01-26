import React from 'react'
import "./contacto.css"
const Contacto = () => {
  return (
    <>
    <h1>Iniciar Sesion</h1>
    <form 
                action="./contacto/gracias" 
                name="contacto" 
                hidden 
                data-netlify="true" 
                netlify-honeypot="bot-field">
                <input type="text" name="nombre" />
                <input type="email" name="email" />
                <textarea name="comentarios"></textarea>
            </form>

            <form method="post" className="formulario">
                <label>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" />
                </label>
                <label>
                    Comentarios:
                    <textarea name="comentarios"></textarea>
                </label>

                {/* Conectamos al formulario invisible */}
                <input type="hidden" name="form-name" value="contacto" />

                <input type="submit" value="Enviar" />
            </form>
    
    </>
  )
}

export default Contacto