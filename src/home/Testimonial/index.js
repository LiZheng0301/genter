import React from 'react'
import img_src from '../../assets/images/resource/image-3.jpg'
import TestimonialContent from './TestimonialContent'
import './testimonial.scss'
const Testimonial = ()=>{
    return(
        <div className="testimonial">
            <TestimonialContent/>
            <img src={img_src} alt=""/>
        </div>
    )
}
export default Testimonial