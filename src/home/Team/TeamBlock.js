import React from 'react'
import TeamCard from './TeamCard'
import {Grid} from '@mui/material'
import '../../assets/css/team.scss'
import img_team_1 from '../../assets/images/resource/team-1.jpg'
import img_team_2 from '../../assets/images/resource/team-2.jpg'
import img_team_3 from '../../assets/images/resource/team-3.jpg'

const TeamBlock = ()=>{
    return(
        <Grid container spacing={3.5} className="team-block">
            <Grid item lg={4} md={6}> <TeamCard img_src={img_team_1} category="Manager" name="Maria Hammond"/></Grid>
            <Grid item lg={4} md={6}><TeamCard img_src={img_team_2} category="Architect" name="Brent Santiago"/></Grid>
            <Grid item lg={4} md={6}><TeamCard img_src={img_team_3} category="Architect" name="Lola Lawson"/></Grid>
        </Grid>
    )
}
export default TeamBlock