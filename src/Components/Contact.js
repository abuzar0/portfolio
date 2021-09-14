import React from 'react';
import Header from './Header';
import '../styles/Contact.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Wobble from './wobble';

const Contact=()=>{
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
        <motion.div variants={pagetransition} initial="out" animate="in" exit="out" transition={Transition}>
        
            <div className="title">
                <motion.h2 
                initial={{y:'-100vh',opacity:0}}
                animate={{y:0,opacity:1,scale:1}}
                transition={{ type: "tween", stiffness:100,duration:1.3}}
                exit={{opacity:0}}
                >
                    <Wobble text="Reach Me Out !"/>
                    {/* <span className="spin">!</span> */}
                </motion.h2>
            </div>
        <div className="contact-detail" >
        <a href="https://api.whatsapp.com/send?phone=03348005234">
            <div className="Icons">
            <motion.div className="Icons-detail"
            whileHover={{scale:1.2,}}
            >
                <WhatsAppIcon style={{color:'white',fontSize:'5rem',width:'3em',height:'0.9em'}}/>
                <span className="contect-text">+923348005234</span>
            </motion.div>
            </div>
            </a>
            <a href="https://github.com/abuzar0">
            <div className="Icons">
                <motion.div className="Icons-detail"
                whileHover={{scale:1.2,}}
                >
                <GitHubIcon style={{color:'white',fontSize:'5rem',width:'3em',height:'0.9em'}}/>
                <span className="contect-text">@buzarchaudhary999</span>
                </motion.div>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/abuzar-chaudhary09/">
            <div className="Icons">
               <motion.div className="Icons-detail"
               whileHover={{scale:1.2,}}
               >
                <LinkedIn style={{color:'white',fontSize:'5rem',width:'3em',height:'0.9em'}}/>
                <span className="contect-text">@buzarchaudhary999</span>
                </motion.div>
            </div>
            </a>
            <a href="http://twitter.com/@AbuzarCh15">
            <div className="Icons">
                <motion.div className="Icons-detail"
                whileHover={{scale:1.2,}}>
                <TwitterIcon style={{color:'white',fontSize:'5rem',width:'3em',height:'0.9em'}}/>
                <span className="contect-text">@buzarchaudhary</span>
                </motion.div>
            </div>
            </a>
            <Link  to='/leavemessage'>
            <div className="Icons">
                <motion.div className="Icons-detail"
                whileHover={{scale:1.2,}}>
                <SmsOutlinedIcon style={{color:'white',fontSize:'5rem',width:'3em',height:'0.9em'}}/>
                <span className="contect-text">Leave Message</span>
                </motion.div>
            </div>
            </Link>
            <a href="mailto:abuzarchaudhary999@gmail.com">
            <div className="Icons">
                <motion.div className="Icons-detail"
                whileHover={{scale:1.2,}}
                >
                <MailOutlineIcon style={{color:'white',fontSize:'5rem',width:'3em',height:'0.9em'}}/>
                <span className="contect-text">abuzarchaudhary999@gmail.com</span>
                </motion.div>
            </div>
            </a>
        </div>
        </motion.div>
        </>
    );
}

export default Contact;