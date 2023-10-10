import React from 'react'
import './Sobremi.css'

function Sobremi() {
  return (

    <div>
        <div id='sobremi' className='container_tittle'> 
            <h1>Sobre mí:</h1> 
        </div>

        <div className='container_description'>
            <p>¡Hola! me llamo Camila Paredes, soy developer full stack junior. Tengo experencia tanto en el front-end como en el back-end, lo que me permite realizar desafios donde se desarrolle la creatividad y la lógica. Además Siempre estoy buscando aprender nuevas herramientas y tecnologías para mantenerme actualizada.</p>  
        </div>

        <div className='buttom_cv'>
          <a className='buttom_link' href="https://drive.google.com/file/d/1tBI6PT4ejBpBBW8bICaPx4rgsGT1s4-i/view?usp=sharing" target='blank'>Descargar CV</a>
        </div>
    </div>
   
    
  )
}

export default Sobremi