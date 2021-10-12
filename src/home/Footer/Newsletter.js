import React from 'react'
import {FiSend} from 'react-icons/fi'

const Blog = ()=>{
    return(
        <div className="newsletter">
            <div className="title">Newsletter</div>
            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex tortor</div>
            <div className="formgroup">
            <input type="email" placeholder="Email"></input>
            <button><FiSend/></button></div>
        </div>
    )
}
export default Blog