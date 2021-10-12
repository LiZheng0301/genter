import React from 'react'
import './slide.scss'

const SlideItem = (props)=>{
    return(
        <div class = "slide">
            <img src={props.img_src} className="slideimg" alt="ss"></img>
            <div class="boxed-text">
                <div class="title">Interior design</div>
                <h1>Bathroom</h1>
                <div class="text">Stories about interior architecture and design including contemporary and mordern homes, apartments, hotels, bars, restaurants, offices and stores.</div>
                <div class="arrow-box">
                    <a class="arrow" href="http://main.html"><span class="flaticon-arrow-pointing-to-right"></span></a>
                </div>
            </div>
        </div>
    )
}

export default SlideItem