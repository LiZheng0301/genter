import React from 'react'
import {Card, CardMedia, CardActionArea} from '@mui/material'
import '../../assets/css/team.scss'
import {FaTwitter, FaInstagram, FaPinterest, FaFacebookF} from 'react-icons/fa'
const TeamCard = (props)=>{
    return(
       <div className="card">
        <Card>
          <CardActionArea>
            <CardMedia image={props.img_src} component="img" className="image"/>
              <div className="card-content">
                <div className="category">{props.category}</div>
                <div className="name">{props.name}</div>
              </div> 
              
          </CardActionArea>
          
        </Card>
        <div className="icons">
        <span><FaFacebookF className="faIcon"/></span>
        <span><FaTwitter className="faIcon"/></span>
        <span><FaInstagram className="faIcon"/></span>
        <span><FaPinterest className="faIcon"/></span>
        
        
        </div>
        </div>
    )
}
export default TeamCard
