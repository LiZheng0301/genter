import React from 'react'
import SectionTitle from '../SectionTitle'
import TeamBlock from './TeamBlock'
import '../../assets/css/team.scss'

const Team = ()=>{
    return(
        <div className="team-section">
            <SectionTitle number="04" title="Meet our Team"/>
            <TeamBlock  className="team-block"/>
        </div>
    )
}
export default Team


