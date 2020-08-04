import React from 'react';
import './style.css'

import whatsapp from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img 
                 src="https://avatars1.githubusercontent.com/u/12430989?s=460&u=240c217de6f05678a23cd630b6b6b880f9c4fb96&v=4" 
                 alt="Taynara"/>
             <div>
                 <strong> Taynara Sene</strong>
                 <span>Química</span>
             </div>
        </header>
        <p>
             Entusiasta das melhores tecnologias de química avançada.
             <br/><br/>
             Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                 <img src={whatsapp} alt="whatsapp"/>
                 Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;