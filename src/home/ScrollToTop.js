


import React, { useState } from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'

const ScrollToTop = ()=>{
  const [visible, setVisible] = useState(false);
const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 1000){
      setVisible(true)
    } 
    else if (scrolled <= 1000){
      setVisible(false)
    }
  };
    const scrollToTop = ()=>{

        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggleVisible)
    return(
    <div className="scrolltotop">
        <button style={{display: visible ? 'inline' : 'none'}}  onClick={scrollToTop} >
         <FaArrowCircleUp size={30}/>
      </button>
    </div>)
}

export default ScrollToTop