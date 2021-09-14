import React from 'react';
import Header from './Header';
import Home4 from './timelinedemo';
import Skill from './Skill';
import { motion} from 'framer-motion';
import '../styles/About.css';
const About=()=>{
    const pagetransition={
        in:{
            opacity:1,
            y:0,
            type:'tween'
        },
        out:{
            opacity:0,
            y:"-100vh"
        }
    }
    const Transition={
        duration:1
    }
   
    return(
        <>
        <Header/>
        <motion.div className="About"
        variants={pagetransition} initial="out" animate="in" exit="out" transition={Transition}
        >
            <Skill/>
            <Home4/>
        </motion.div>
        
        </>
    );
}

export default About;