import React from 'react'
import "./nav.css"
const nav = () => {
  return (
    <nav>
        <ul className='nav-lista'>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Inicio</a> 
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Nosotros</a>
            </li>
            <li className='nav-item'>
            <a href="#" className='nav-link'>Contacto</a>
            </li>
        </ul>
    </nav>
  )
}

export default nav