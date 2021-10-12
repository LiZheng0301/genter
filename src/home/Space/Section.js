

import React from 'react'
import SpaceSectionTitle from './SpaceSectionTitle'
import {Typography , Button} from '@mui/material'

const Section = ()=>{


return(


    <div style={{backgroundColor: '#ffffff'}}>
    <SpaceSectionTitle number="01" title="We love art & space"/>
    <Typography style={{paddingLeft: '80px'}}>
        <div>
        I was always somebody who felt quite sorry for myself, what I had not got compared to my friends, how much of a struggle my life seemed to be compared to others. I was caught up in a web of negativity and needed someone or something to help me to escape.</div>
        <br/>
        <div> During an afternoon at work one day, aged around twenty one, a colleague I was working with started to talk to me.</div>
        </Typography>
        <Button variant="contained" color="primary" className="btn"><span>READ MORE</span></Button>


       </div>
    
    )
    }

export default Section