import React from 'react'
import './Inicio.css'
import Perfil from './img/perfil.jpeg'

function Inicio() {
  return (

    <div className='container_name'>
        <div className='container'>
            <img  className= 'img' src={Perfil} alt=""/>
            <h1>Paredes Camila</h1>
            <h2>Front-end Developer</h2>
        </div>
        
    </div>
    
  )
}

export default Inicio