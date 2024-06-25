import React, { useState } from 'react';


const Projects = () =>{

    const [age, setAge] = useState('');

    const HoverEl = (props) =>{
        setAge(props)
    }

    return(
        <div className='projetos'>
            <div>
                <h2>Projects Page</h2>
            </div>
            <div className='projetos-box'>
                <div className='nav-projeto-left'>
                    <div className='lista-projetos'>
                        <div>
                            <ul>
                                <li onMouseEnter={()=> HoverEl('val1')}>
                                    <a href="https://todolist-chi-fawn.vercel.app/" target='_blank' rel="noopener noreferrer">To Do List App </a>
                                </li>
                                <li onMouseEnter={()=> HoverEl('val2')}> 
                                    <a href="https://my-costs-two.vercel.app/" target='_blank' rel="noopener noreferrer">My Costs App </a>
                                </li>
                                <li>
                                    <a href="https://wesley-moraes.github.io/landingPage-Flash/" target='_blank' rel="noopener noreferrer">Landing Page Flash</a>
                                </li>
                                <li>
                                    <a href="https://wesley-moraes.github.io/DungeonChars/" target='_blank' rel="noopener noreferrer">Dungeon's Chars</a>
                                </li>
                                <li>
                                    <a href="https://quiz-react-three-dun.vercel.app/" target='_blank' rel="noopener noreferrer">Quiz React</a>
                                </li>
                                <li>
                                    <a href="https://resident-evil-2-landingpage.vercel.app/" target='_blank' rel="noopener noreferrer">Resident Evil 2</a>
                                </li>
                                <li>
                                    <a href="https://next-test-rn8i.vercel.app/" target='_blank' rel="noopener noreferrer">Next Test</a>
                                </li>                    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='prev-projeto-right'>
                    <p>{age}</p>
                    <div className='box-prev'>

                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Projects;