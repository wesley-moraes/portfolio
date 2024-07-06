import React from 'react';
import { FaGithub } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

/**
 * 
 * 
 * 
 */

const Contact = () =>{

    console.log("Entrou aqui");
    return(
        <div className='container-contact'>
            <div>
                <h2 className='subtitle'>Me mande uma mensagem!</h2>
            </div>
            <div className='social-box'>
                
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/wesley-moraes" target="_blank" rel="noopener noreferrer" className='linkedin' ><FaLinkedin />LinkedIn</a>
                    <a href="https://github.com/wesley-moraes" target="_blank" rel="noopener noreferrer" className='github' ><FaGithub />GitHub </a>
                    <a href="https://discordapp.com/users/292421100854444034" target="_blank" rel="noopener noreferrer" className='discord'><IoLogoDiscord />Discord</a>
                </div>
                
            </div>
        </div>
    )
};

export default Contact;