import React from 'react'
import Link from 'next/link'
import "./nav.css"
const nav = () => {
  return (
    <nav>
        <ul className='nav-lista'>
            <li className='nav-item'>
            <Link href="./" className='nav-link'>Inicio</Link>
            </li>
            <li className='nav-item'>
                <Link href="./nosotros" className='nav-link'>Nosotros</Link>
            </li>
            <li className='nav-item'>
            <Link href="./contacto" className='nav-link'>Contacto</Link>
            </li>
        </ul>
    </nav>
  )
}

export default nav