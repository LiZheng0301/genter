import React from 'react'
import Carousel from 'nuka-carousel'
import img from '../../assets/images/resource/author-2.jpg'
import {FaLongArrowAltRight, FaLongArrowAltLeft} from 'react-icons/fa'
import Album from './Album'
const TestimonialContent = ()=>{
    return(
        <div className="testimonialcontent">
          <Carousel wrapAround='true' autoplay='true' defaultControlsConfig={{
       nextButtonText: <FaLongArrowAltRight/>,
        prevButtonText: <FaLongArrowAltLeft/>,
        
}}>
        <Album img_src={img}/>
        <Album img_src={img}/>
      
      </Carousel>
        </div>
    )
}
export default TestimonialContent