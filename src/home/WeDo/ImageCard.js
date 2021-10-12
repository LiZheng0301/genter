import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"

const ImageCard = (props)=>{
    return(
        <div className="card">
            <div className="image"><img src={props.img_src} alt='ss'></img></div>
            <div className="cardcontent">
                <div className="title">{props.design} Design</div>
                <div className="text">&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nunc orci, gravida quis metus</div>
                <a className="arrow" href="http://main.html"><FaLongArrowAltRight/></a>
            </div>
        </div>
    )
}
export default ImageCard