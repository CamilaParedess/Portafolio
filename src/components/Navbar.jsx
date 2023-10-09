import React from 'react'
import './Navbar.css'

function Navbar() {
  return (

    <nav className='Nav_bar'>

        <div className='container_nav_item'>
            <ul className='Nav_ul'>
                <li>Inicio</li>
                <li>Sobre mí</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar