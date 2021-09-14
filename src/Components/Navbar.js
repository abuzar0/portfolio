import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import CloseIcon from '@material-ui/icons/Close';
import { motion,AnimatePresence } from 'framer-motion';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonIcon from '@material-ui/icons/Person';
import { FaCode } from 'react-icons/fa'
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
const Navbar=({open,setopen})=>{
    const linkStyle = {
        textDecoration: "none",
        color:"white",
      };
      
    return(
        <>
        <div className={open?"Navbar":"DisplayNone"}>
            <motion.div className="closeIcon"
            whileHover={{scaleY:1.2}}>
            <CloseIcon  style={{marginTop:0,marginRight:0,color:'rgba(219, 171, 40, 0.897)',cursor:'pointer',}} onClick={()=>setopen(!open)}/>
            </motion.div>
            <AnimatePresence>
            {
            open &&(
            <motion.ul className="Navbar-list">
                <motion.li 
                initial={{x:-50,opacity:0}}
                animate={{x:50,opacity:1,}}
                transition={{duration:0.40,type:'tween',ease:'easeInOut'}}
                >
                <NavLink to="/" style={linkStyle} exact activeStyle={{color: "#ffb510"}}>
                <span className="Icons-Nav">  
                <HomeRoundedIcon/>&nbsp;Home</span>
                    
                 </NavLink >
                </motion.li>
                <motion.li
                initial={{x:-50,opacity:0}}
                animate={{x:50,opacity:1}}
                transition={{duration:0.80,type:'tween',ease:'easeInOut'}}
                >
                    <NavLink to="/about" style={linkStyle} activeStyle={{color: "#ffb510"}}>
                        <span className="Icons-Nav">
                            <PersonIcon/>&nbsp;About
                        </span>
                    </NavLink>
                </motion.li>
                <motion.li
                initial={{x:-50,opacity:0}}
                animate={{x:50,opacity:1}}
                transition={{duration:1.20,type:'tween',ease:'easeInOut'}}
                >
                    <NavLink to="/project" style={linkStyle} activeStyle={{color: "#ffb510"}}>
                        <span className="Icons-Nav">
                           <FaCode/>&nbsp;Project
                        </span>
                    </NavLink>
                </motion.li>
                <motion.li
                initial={{x:-50,opacity:0}}
                animate={{x:50,opacity:1}}
                transition={{duration:1.40,type:'tween',ease:'easeInOut'}}
                >
                <NavLink to="/contact" style={linkStyle} activeStyle={{color: "#ffb510"}}>
                    <span className="Icons-Nav">
                       <ContactPhoneRoundedIcon/>&nbsp;Contact
                    </span>
                    </NavLink>
                </motion.li>
            </motion.ul>
            )}
        </AnimatePresence>
        </div>
        </>
    )
}
export default Navbar;