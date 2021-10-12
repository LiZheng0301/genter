import React from 'react'
import SectionTitle from '../SectionTitle'
import img_src_1 from '../../assets/images/resource/news-1.jpg'
import img_src_2 from '../../assets/images/resource/news-2.jpg'
import Article from './Article'
import './News.scss'
import {Grid} from '@mui/material'
const News1 = { title: 'What makes fliers unrivaled',
                date: '12 August 2020',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet tellus rhoncus, ornare lectus at, tincidunt turpis. Aliquam vulputate nulla ut sollicitudin posuere."
}
const News2 = { title: 'A right media mix can make the difference ',
                date: '10 August 2020',
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet tellus rhoncus, ornare lectus at, tincidunt turpis. Aliquam vulputate nulla ut sollicitudin posuere."
}

const LatestArticle = ()=>{
    return(
        <div className="news-section">
        <SectionTitle number="07" title="Latest Articles"/>
          <Grid container className="news" spacing={3}>
             <Grid item lg={6}><Article img_src={img_src_1} news_detail={News1}/></Grid>
             <Grid item lg={6}><Article img_src={img_src_2} news_detail={News2}/></Grid>
          </Grid>
        </div>
    )
}
export default LatestArticle


