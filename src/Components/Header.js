import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import '../App.css';
import MenuIcon from '@material-ui/icons/Menu';
import {motion } from 'framer-motion';

const Header=()=>{
    const [open,setopen]=useState(false);
    useEffect(()=>{
        // console.log(open);
    },[open])
    
    return(
        <>
        <motion.div className="header"
        initial={{y:-100}}
        animate={{y:0}}
        transition={{duration:2,type:'tween'}}
        >
            <MenuIcon style={{color:'#ffb510',fontSize:'2.5em'}} className="menuButton" onClick={()=>setopen(!open)}/>
        </motion.div>
            <Navbar open={open} setopen={setopen}/>
        </>
    )

}
export default Header;