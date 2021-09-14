import React,{useState,useEffect} from 'react';
import Header from './Header';
import Loader from './Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import '../styles/Home.css'
const Home=()=>{
    const[isload,setload]=useState(true);
    const [day,setday]=useState('');
    const SelectDay=()=>{
        let d=new Date();
        setday(WeekDay[d.getDay()]);
    }
    const WeekDay=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ]
    useEffect(()=>{
        setTimeout(()=>{
            setload(!isload);
            SelectDay();
            // console.log(isload);
        },3000)
        // eslint-disable-next-line
    },[])
    return(
        <>
            <div className={isload?"loader":"DisplayNone"}>
            {isload &&(<Loader/>)}
            </div>
        <div className="Home">
        {!isload &&(
            <>
        <Header isload={isload}/>
        <div className="messege">
            <motion.div className="block-message"
            initial={{x:'100vw',opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1.5,delay:3,type:'spring',bounce:0.25}}
            >
                <span className="text">
                    <h6>Have a nice <span className="Day-name">{day}</span></h6>&nbsp;
                    <Icon icon="noto:white-heart" width="30" height="25" />
                </span>
             </motion.div>
        </div>
        <div className="content-basic">
        <motion.div className="content-detail">
            <motion.h2 className="Content-Name"
            initial={{x:-10,opciaty:0,scale:0.1}}
            animate={{ x:0, opciaty:1,scale:1,
            }}
            transition={{
                duration:2.5,
                type:'tween',
            }}
            exit="out"
            >
              Hello,I`m&nbsp;
              <span className="name">
                  Abuzar
                </span> 
              <AnimatePresence>
            <div className="Dot">
                {!isload &&
                  <motion.div initial={{y:0,opacity:0}} animate={{y:10,opacity:1}} transition={{ duration:0.75,type: "spring",bounce:0.12,delay:4}} className="bouncingDot">.</motion.div>
                }
                </div>
              </AnimatePresence>
            </motion.h2>
            <motion.p className="Content-dev"
            initial={{x:'100vw',opciaty:0,scale:0.1}}
        animate={{ x:0, opciaty:1,scale:1,
        }}
        transition={{
            duration:2,
            type:'tween',
            delay:1.5,
        }}
        exit="out"
        >
                I`M A {''}
               <span style={{color:'rgb(214, 243, 243);'}} >WEB DEVELOPER</span>
            </motion.p>
        </motion.div>
    </div>
    </>
    )}
    </div>
        </>
        
        )

}

export default Home;