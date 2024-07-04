import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";

import photoMe from '../img/me3.jpg';

const About = () =>{
    return (
        <div className='container-about'>
            <h2 className='subtitle' >Um pouco sobre mim</h2>
            
            <div className='container-photo'>
                <div className='content-photo'>
                    <img src={photoMe} alt="Wesley Moraes" />
                </div>
                
                <div className='content-about'>
                    <div>
                        <p>Desenvolvedor front-end! Interessado tanto pelo UI quanto apaixonado por desenvolver aplicações web! <br /><br />
                            Tenho experiência em JavaScript, React, HTML, CSS e sempre busco aprender e implementar novas tecnologias.
                            Acredito que um bom design aliado à funcionalidade é a chave para criar experiências de usuário incríveis. <br /><br />
                            Agora focando em React.js para alcançar novas experiências. 
                        </p>
                        <div className='skills-icons'>
                            <div className='html'><FaHtml5 /></div>
                            <div className='css'><IoLogoCss3 /></div>
                            <div className='js'><TbBrandJavascript /></div>
                            <div className='react'><FaReact /></div>
                            <div className='sass'><FaSass /></div>
                            <div className='db'><FaDatabase /></div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;