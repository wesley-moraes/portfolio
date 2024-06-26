import React, { useState } from 'react';
import dungeonsCharImg from '../img/dungeons-char-prev.jpg'
import flashImg from '../img/flash-prev.jpg'
import myCostsImg from '../img/my-costs-prev.jpg'
import nextTesthImg from '../img/next-test-prev.jpg'
import quisReactImg from '../img/quiz-react-prev.jpg'
import re2Img from '../img/re2-prev.jpg'
import toDoListImg from '../img/tod-do-list-prev.jpg'


const Projects = () =>{

    const [imgSrc, setImgSrc] = useState();

    const HoverEl = (props) =>{
        setImgSrc(props)
    }

    return(
        <div className='projetos'>
            <div>
                <h2>Navegue nos meus projetos e me mande uma mensagem!</h2>
            </div>
            <div className='projetos-box'>
                <div className='nav-projeto-left'>
                    <div className='lista-projetos'>
                        <div>
                            <ul>
                                <li onMouseEnter={()=> HoverEl(toDoListImg)}>
                                    <a href="https://todolist-chi-fawn.vercel.app/" target='_blank' rel="noopener noreferrer">To Do List App </a>
                                </li>
                                <li onMouseEnter={()=> HoverEl(myCostsImg)}> 
                                    <a href="https://my-costs-two.vercel.app/" target='_blank' rel="noopener noreferrer">My Costs App </a>
                                </li>
                                <li onMouseEnter={()=> HoverEl(flashImg)}>
                                    <a href="https://wesley-moraes.github.io/landingPage-Flash/" target='_blank' rel="noopener noreferrer">Landing Page Flash</a>
                                </li>
                                <li onMouseEnter={()=> HoverEl(dungeonsCharImg)} > 
                                    <a href="https://wesley-moraes.github.io/DungeonChars/" target='_blank' rel="noopener noreferrer">Dungeon's Chars</a>
                                </li>
                                <li onMouseEnter={()=> HoverEl(quisReactImg)} >
                                    <a href="https://quiz-react-three-dun.vercel.app/" target='_blank' rel="noopener noreferrer">Quiz React</a>
                                </li>
                                <li onMouseEnter={()=> HoverEl(re2Img)} >
                                    <a href="https://resident-evil-2-landingpage.vercel.app/" target='_blank' rel="noopener noreferrer">Resident Evil 2</a>
                                </li>
                                <li onMouseEnter={()=> HoverEl(nextTesthImg)} >
                                    <a href="https://next-test-rn8i.vercel.app/" target='_blank' rel="noopener noreferrer">Next Test</a>
                                </li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='prev-projeto-right'>
                    <p></p>

                    {
                        imgSrc ? (
                            <div className='box-prev'>
                                <img src={imgSrc} alt="img" />
                            </div>
                            ) : (
                                <div className='box-prev-empty'></div>
                            )   
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;