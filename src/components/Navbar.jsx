import React from 'react'
import './Navbar.css'

function Navbar() {
  return (

    <nav className='Nav_bar'>

        <div className='container_nav_item'>
            <ul className='Nav_ul'>
                <li> <a className='underline' href="#">Inicio</a></li>
                <li><a className='underline' href="#sobremi">Sobre mí</a> </li>
                <li><a className='underline' href="#proyectos">Proyectos</a> </li>
                <li> <a className='underline' href="#contacto">Contacto</a></li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar