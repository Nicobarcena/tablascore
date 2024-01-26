"use client"
import React, { useState } from 'react'
const Nosotros = () => {
    
    const [numero, setNumero] = useState(22)
    
    function sumar (){
        const nuevoNumero = numero + 1
        setNumero(nuevoNumero)
    }
    
    return (
    <>
    <h1>Estas en la pagina Nosotros</h1>
    <p>contador de cosas <br />
    vamos por el numero: {numero} </p>
    <button onClick={sumar}>sumar 1</button>
    </>
    )
}

export default Nosotros