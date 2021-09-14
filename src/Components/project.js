import React from 'react';
import Header from './Header';
import '../styles/Project.css';
import Wobble from './wobble';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';
import logo from '../styles/logo.png';
import {motion} from 'framer-motion'
const Project=()=>{
    const items1=[
        "React",
        "React Hook",
        "CSS",
        "axios",
        "Git",
        "Material Ui",
        "Responsive Desgin",
    ];
    const items2=[
        "React",
        "React Hook",
        "CSS",
        "Material Ui",
        "Framer Motion",
        "Firebase",
        "Git",
        "Responsive Desgin",
    ];
    const useStyles = makeStyles((theme) => ({
        large: {
          width: theme.spacing(10),
          height: theme.spacing(10),
        },
      }));
      const classes = useStyles();
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
        <motion.div className="main" variants={pagetransition} initial="out" animate="in" exit="out" transition={Transition}>
        <div className="Project">
        <span  className="title-project">
            <Wobble text={`My Project .`}/>
            </span>
        </div>
            <div className="card">
                <div className="icon-tag">
                <Avatar className={classes.large} variant="circular" style={{backgroundColor:'white'}} >
                    <MovieFilterOutlinedIcon style={{fontSize:"3rem",color:"black" ,backgroundColor:'white'}} /> 
                </Avatar>
                </div>
                <div className="card-title">
                    <h6><Wobble text="Movies"/></h6>
                    
                    <p className="card-text">
                    A Movie App that uses some of the non-copyrighted movies from moviesHub.
                    </p>
                    <div className="card-body">
                        {
                            items1.map((item)=>(
                                <motion.div className="block" whileHover={{scale:1.2,}}>
                                    <span className="text">{item}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                <div className="Button">
                    <a href="https://react-movie-appsites.netlify.app">
                        <motion.button className="btn"  whileHover={{scale:1.2,}}>View Project </motion.button>
                    </a>
                    <a href="https://github.com/abuzar0/movieAppReact">
                            <motion.button className="btn"  whileHover={{scale:1.2,}}>View Github Reporsitry</motion.button>
                    </a>
                </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="card">
                <div className="icon-tag">
                <Avatar className={classes.large} variant="circular" style={{backgroundColor:'white'}} >
                    <img src={logo} width="40" height="40" style={{backgroundColor:'white'}} alt="logo"></img>
                </Avatar>
                </div>
                <div className="card-title">
                    <h6><Wobble text="MyPortfolio"/></h6>
                    
                    <p className="card-text">
                    My very own Portfolio to showcase everything about my Work & Experience..
                    </p>
                    <div className="card-body">
                        {
                            items2.map((item)=>(
                                <motion.div className="block" whileHover={{scale:1.2,}}>
                                    <span className="text">{item}</span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                <div className="Button">
                    <a href="https://abuzar-portfolio0.netlify.app">
                        <motion.button className="btn"  whileHover={{scale:1.2,}}>View Project</motion.button>
                    </a>
                    <a href="https://github.com/abuzar0/portfolio">
                            <motion.button className="btn"  whileHover={{scale:1.2,}}>View Github Reporsitry</motion.button>
                    </a>
                </div>
            </div>
            {/*  */}
            {/*  */}

        </motion.div>
        </>
    );
}

export default Project;