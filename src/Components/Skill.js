import React from "react";
import Wobble from './wobble';
import '../styles/About.css';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import {Link} from 'react-router-dom';
import Pdf from '../Abuzar Resume.pdf';
const Skill=()=>{
    return(
        <>
        <div className="container">
            <span className="title">
                <Wobble text={"A Little Bit About Me 👦."}/>
            </span>
        </div>
        <div className="Contant-about">
                <p>
                I am a self taught and passionate web developer .
                I love to develop websites and web applications.
                I love to learn new technologies and can stick with it until it's achieved by me .
                I can solve the problem myself which helps me to enrich my knowledge preciously .
                </p>
                <br></br><br></br>
                <p>
                I accepts my lacking and eagerly try to update myself . 
                I eagerly want to learn and research more and more about new technologies and ready to face 
                all kind of challenges with a view to establishing myself as someone with excellent creativity,
                professional skills and leadership abilities which I would love to implement in real life.
                </p>
                <Link to={Pdf} target="_blank" download >
                <div className="Pdf-file">
                      Download Resume
                </div>
                </Link>
                <Link to='/contact' >
                <div className="Pdf-file">
                    Let`s Start Work ToGether
                </div>
                </Link>
            </div>
        <div className="Skill">
        <span  className="title">
            <Wobble text={`My Skills`}/>
            </span>
        </div>
        <div className="Contant-skill">
        <motion.div className="Skill-box" whileHover={{scale:1.2,}}>
                <span className="skill-icon">
                <Icon icon="logos:react" width="60" height="40" />
                </span>
                <span className="Icons-name">React</span>
            </motion.div>   
            <motion.div className="Skill-box"whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="logos:javascript" width="60" height="40" />
                </span>
                <span className="Icons-name">JavaScript</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="logos:es6" width="60" height="40" />
                </span>
                <span className="Icons-name">ES 6</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="logos:nodejs" width="60" height="40" />
                </span>
                <span className="Icons-name">Node js</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}}>
                <span className="skill-icon">
                <Icon icon="file-icons:jsx-alt" width="60" height="40" />
                </span>
                <span className="Icons-name"> JSX </span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="vscode-icons:file-type-sql" width="60" height="40" />
                </span>
                <span className="Icons-name">SQL</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="fontisto:jquery" width="60" height="40" />
                </span>
                <span className="Icons-name">jQuery</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="vscode-icons:file-type-json" width="60" height="40" />
                </span>
                <span className="Icons-name">jSon</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}}>
                <span className="skill-icon">
                <Icon icon="logos:html-5" width="60" height="40" />
                </span>
                <span className="Icons-name">HTML5 </span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}} >
                <span className="skill-icon">
                <Icon icon="logos:css-3" width="60" height="40" />
                </span>
                <span className="Icons-name">CSS</span>
            </motion.div>   
            <motion.div className="Skill-box"  whileHover={{scale:1.2,}}>
                <span className="skill-icon">
                <Icon icon="cib:framer" width="60" height="40" />
                </span>
                <span className="Icons-name"> FramerMotion</span>
            </motion.div>   
            <motion.div className="Skill-box" whileHover={{scale:1.2,}}>
                <span className="skill-icon">
                <Icon icon="logos:bootstrap" width="60" height="40" />
                </span>
                <span className="Icons-name">Bootstrap</span>
            </motion.div>   
            <motion.div className="Skill-box"  whileHover={{scale:1.2,}}>
                <span className="skill-icon">
                <Icon icon="logos:material-ui" width="60" height="40" />
                </span>
                <span className="Icons-name">Material-Ui</span>
            </motion.div>   
        </div>
        </>
    )
}
export default Skill;