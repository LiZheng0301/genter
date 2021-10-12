import React from 'react'
import SectionTitle from '../SectionTitle'
import '../../assets/css/team.scss'
import WeDoSlide from './WeDoSlide'
import './wedo.scss'
const WeDo = ()=>{
    return(
        <div className="wedo">
        <SectionTitle number="02" title="What we do"/>
        <WeDoSlide/>
        </div>
    )
}
export default WeDo