import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import '../App.css';

const Animation=()=>{

    return(
        <>
        <div className="loader">
         <Loader
        type="Bars"
        color="#ffb510"
        height={100}
        width={100}
        timeout={4000} //4 secs
        />
        </div>
        </>
    )

}

export default Animation;