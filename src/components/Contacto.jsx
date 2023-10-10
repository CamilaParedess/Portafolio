import React from 'react'
import './Contacto.css'
import Email from './img/email.png'
import Linkedin from './img/linkedin.png'
import Github from './img/github.png'
import Whatsapp from './img/whatsapp.png'

function Contacto() {
  return (
    <div id='contacto' className='container_contacto'> 
        <div className='container_contact'>
            <h1>Contacto:</h1>
        </div>

        <div className='container_cards' >

            <div className='container_item'>
                <a href="mailto:camilaparedesantonella@gmail.com?subject=Asunto&body=Texto" target='blank'>
                    <img src={Email} alt="" />
                </a>
            </div>
            
            
            <div className='container_item'>
                <a href="https://www.linkedin.com/in/camila-paredes-/" target='blank'>
                <img src={Linkedin} alt="" />
                </a>
            </div>

            <div className='container_item'>
                <a href="https://github.com/CamilaParedess" target='blank'>
                <img src={Github} alt="" />
                </a>
            </div>

            <div className='container_item'>
                <a href="https://api.whatsapp.com/send/?phone=1162449023&text&type=phone_number&app_absent=0" target='blank'>
                <img src={Whatsapp} alt="" />
                </a>
            </div>
        </div>
        
      
    </div>
  )
}

export default Contacto
