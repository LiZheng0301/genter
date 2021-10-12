import React from 'react'
import logo from '../../assets/images/logo-yellow.png'

import { FaPhoneAlt } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
const Contact = ()=>{
    return(
        <div className="contact">
        <a href="html"><img src={logo} alt=""/></a>
        <div className="text">We’ve completed 1000+ demo site for more than one million of our customers.</div>
        <div className="phone">
            <span className="icon"><FaPhoneAlt/></span>
            <div className="phoneNumber">001-6688-9999</div>
        </div>
        <div className="email">
            <span className="icon"><AiOutlineMail/></span>
            <div className="emailAddress">contact@site.com</div>
        </div>
        </div>
    )
}
export default Contact