import React,{useState} from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import Wobble from './wobble';

const LeaveMessage=()=>{
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
    const [data,setdata]=useState({
        name:'',
        email:'',
        message:''
    })
    const SetData=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata({...data,[name]:value});
    }
    const Submit= async(e)=>{
        e.preventDefault();
        const{name,email,message}=data;
        if(name && email && message){
        const res=await fetch('https://portfolio-52cde-default-rtdb.firebaseio.com/portfolioMessege.json',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                message,
            }),

        })
        if(res){
            setdata({
                name:'',
                email:'',
                message:''
            });
            alert('Your Messsege Send Successfully !');
        }
    }else{
        alert('Plz Fill All Filled');
    }
    }
    return (
        <>
        <Header/>
        <motion.div className="message-container"
        variants={pagetransition} initial="out" animate="in" exit="out" transition={Transition}>
            <div className='Heading'>
                <h2>
                  <Wobble text="Leave a Message For Me"/>
                </h2>
            </div>
            <div className="message-body">
                <form className="form" onSubmit={Submit} autoComplete="off">
                    <div className="input-text">
                    <label className="input-label">Name</label>
                    <input placeholder="Name" className="input" name="name" value={data.name} onChange={SetData} ></input> 
                    </div>
                    <div className="input-text">
                    <label className="input-label">Email</label>
                    <input type="Email" placeholder="email" className="input" name="email" value={data.email}  onChange={SetData}></input> 
                    </div>
                    <div className="input-text">
                    <label className="input-label">Message</label>
                    <textarea placeholder="Message" className="input" name="message" style={{height:80,}} value={data.message}  onChange={SetData}></textarea> 
                    </div>
                   <div className="button-container">
                      <motion.button whileHover={{scale:1.2}} className="button" type="submit">Send</ motion.button>
                   </div>
                    
                </form>
                
                
            </div>
            
        </motion.div>
        </>
    )
}
export default LeaveMessage;