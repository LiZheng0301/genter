import React from 'react'
import Team from '../home/Team/Team'
import Slide from '../home/Slide/Slide'
import Space from '../home/Space/Space'
import WeDo from '../home/WeDo/WeDo'
import LatestArticle from '../home/LatestArticle/LatestArticle'
import Footer from '../home/Footer/Footer'
import Gallery from '../home/Gallery/Gallery'
import Testimonial from '../home/Testimonial'
import ScrollToTop from '../home/ScrollToTop'
import ColorSetting from '../home/ColorSetting'



const Main = ()=>{

    
 
    return( <>

       <Slide/>
       <Space/>
       <WeDo/>
       <Gallery/>
       <Team/>
       <Testimonial/>
       <LatestArticle/>
       <Footer/>
       <ScrollToTop/>
       <ColorSetting/>
      </>)
  
}
export default Main