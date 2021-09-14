import React,{useState,useEffect} from "react"
import { Chrono } from "react-chrono";
import {useInView} from 'react-intersection-observer';
import { motion,useAnimation } from "framer-motion";
import '../index.css';
import Wobble from "./wobble";
import '../styles/About.css';
  const Home4 = () => {
    const [ref, inView] = useInView({
      threshold: 0.2,
    });
    const animation=useAnimation();
    const items = [
      {
          title: "01/21 - Today",
          cardTitle: "Full Stack Developer",
          cardSubtitle: "Self Employed",
          cardDetailedText:
            "Being a javascript enthusiast, I started working using libraries and frameworks built in javascript.",
      },
        {
          title: "07/20 - 08/20",
          cardTitle: "Web Development",
          cardSubtitle: "Certification Course",
          cardDetailedText:
            "Completed a certification course in Website Development in PHP/Laravel from Aridian Array Software Soceity.",
        },
        {
          title: "04/19 - 06/20",
          cardTitle: "Javascript Developer",
          cardSubtitle: "Self Employed",
          cardDetailedText:
            "For more than a year, I developed small-scale website applications using Javascript.",
        },
        {
          title: "07/19 - Today",
          cardTitle: "Bachelor in Softwere Engineering",
          cardSubtitle: "Arid Agriculture University, Rawalpindi.",
          cardDetailedText:
            "Started my Bachelor's degree in Softwere Engineering in 2019.",
        },
  ];
  const [width, setwidth] = useState(getWindowDimensions());
  function getWindowDimensions() {
    const width=window.innerWidth;
    return width;
    }
    useEffect(()=>{
      if(inView){
        animation.start({
          x:0,
          transition:{
            type:'spring',duration:0.75,bounce:0.2,ease:'easeIn'
          }
        })
      }
      if(!inView){
        animation.start({
          x:'-100vw',
          transition:{
            delay:0.815,
          }
        })
      }
      // eslint-disable-next-line
    },[inView])
  useEffect(() => {
      function handleResize() {
        setwidth(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [width]);
    return (
      <>
      <div ref={ref} >
         <div className="container" >
           <span className="title">
             <Wobble text="My Timeline"/>
           </span>
         </div>
          <motion.div
          animate={animation}
          className="timeline">
        <Chrono 
        items={items} 
        mode={width>500?"VERTICAL":"VERTICAL_ALTERNATING"}
        theme={{ 
            titleColor: "black",
            primary: "#f9a300",
            secondary: "grey",
            cardBgColor: "rgb(71, 65, 65)",
            cardForeColor: "white",
        }}
        disableNavOnKey
        useReadMore={width>500? false : true} 
        hideControls 
        scrollable={{scrollbar: true}} 
         />
         </motion.div>
         </div>
      </>
    )
  }

  export default Home4;