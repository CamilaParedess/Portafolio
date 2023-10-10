import React from 'react'
import './Proyectos.css'
import Sportstrade from './img/sportstrade.jpeg'

function Proyectos() {
  return (
    
    <div id='proyectos' className='container_proyectos'>

            <div className='tittle_proyects'>
                <h1>Mis proyectos:</h1>
            </div>

            <div className='card_proyects'>
                <div className='container_sportstrade'>
                    <img className='img_sporstrade' src={Sportstrade} alt="" />
                </div> 

                <div className='tittle_sporstrade'>
                    <h2>Sportstrade - E-Commerce</h2>
                </div>

                <div className='text_sportstrade'>
                    <p>Sportstrade es una tienda de zapatillas desarrollada con ReactJS.</p>
                </div>

                <div className='buttom_codigo'>
                    <a className='link_codigo' href="https://github.com/LucianoBDN/Ecomerce-react-v3.git" target='blank'>Ver código</a>
                </div>
            </div>
            
       
    </div>
    
  )
}

export default Proyectos