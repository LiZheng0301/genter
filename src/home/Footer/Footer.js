import React from 'react'
import Contact from './Contact'
import Blog from './Blog'
import Tags from './Tags'
import Newsletter from './Newsletter'
import {Grid} from '@mui/material'
import "./footer.scss"
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Footer = ()=>{
    return(
       <div className="footerContainer">
       <Grid container className="gridcontainer">
        <Grid lg={3} md={6}><Contact/></Grid>
        <Grid lg={3} md={6}><Blog/></Grid>
        <Grid lg={3} md={6}><Tags/></Grid>
        <Grid lg={3} md={6}><Newsletter/></Grid> 
       </Grid>
       <div className='footer'>
        <div className="icongroup">
        <span><FaFacebookF className="faIcon"/></span>
        <span><FaTwitter className="faIcon"/></span>
        <span><FaInstagram className="faIcon"/></span>
        <span><FaWhatsapp className="faIcon"/></span>
       </div>
       <div className="information">
       © 2020 Designed By <a href="http://main.html">Borvista</a>. We build with </div>
       </div>
       </div>
    )
}

export default Footer