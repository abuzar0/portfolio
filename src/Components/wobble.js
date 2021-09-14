import React from "react";
import { motion } from "framer-motion";
    const Wobble=({text})=>{
    return(
        <div style={{display:'flex',marginTop:5}}>
        {Array.from(text).map((l, key) => (    
        <motion.span 
          initial={{x:0,y:0}}
          whileHover={{x:2,y:-15}}
          transition={{type: "spring", stiffness: 250, duration: 1}}
          key={key}
        >
          {l === " " ? <span>&nbsp;</span> : l}
        </motion.span>
      ))}
        </div>
    )

}
export default Wobble;