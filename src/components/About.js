import React from 'react';
import { FaGithub } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


import photoMe from '../img/me.jpg';

const About = () =>{
    return (
        <div className='container-about'>
            <h2 className='subtitle' >Um pouco sobre mim</h2>
            
            <div className='container-photo-socialMedia'>
                <div className='content-photo'>
                    <img src={photoMe} alt="Wesley Moraes" />
                </div>
                
                <div className='content-socialMedia'>
                    <div>
                        <p>Desenvolvedor front-end! Interessado tanto pelo UI quanto apaixonado por desenvolver aplicações web!
                            Tenho experiência em JavaScript, React, HTML, CSS e sempre busco aprender e implementar novas tecnologias.
                            Acredito que um bom design aliado à funcionalidade é a chave para criar experiências de usuário incríveis.
                            Agora focando em React.js para alcançar novas experiências. 
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/wesley-moraes" target="_blank" rel="noopener noreferrer"><FaLinkedin />
                            LinkedIn</a>
                            <a href="https://github.com/wesley-moraes" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub </a>
                            <a href="https://discordapp.com/users/292421100854444034" target="_blank" rel="noopener noreferrer"><IoLogoDiscord />Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;