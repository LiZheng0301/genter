import React from 'react'

import './space.scss'
import {Grid} from '@mui/material'
import Section from './Section'
import Image from './Image'


const Space = ()=>{

return(
    
    <Grid container spacing={3.5} className="space-section">
      <Grid item xs={6} ><Section/></Grid>
      <Grid item xs={6}><Image/></Grid>
    </Grid>
)

}
export default Space
