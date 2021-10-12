import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.scss'
import SlideItem from './SlideItem'
import {slide_img_1, slide_img_2, slide_img_3, slide_img_4} from './IMGSRC'

//Owl Carousel Settings
const options = {
  responsiveClass: true,
  nav: true,
  loop: true,
  autoplay: 1000,
  smartSpeed: 1000,
  items: 1,
  // navText: ["<div class='nav-button owl-prev'><</div>", "<div class='nav-button owl-next'>></div>"]

};

const Slide = ()=> {
 
    return (
<div>
<OwlCarousel className="slider-items owl-carousel" {...options}>
        <SlideItem className="item" img_src = {slide_img_1}/>
        <SlideItem className="item" img_src = {slide_img_2}/>
        <SlideItem className="item" img_src = {slide_img_3}/>
        <SlideItem className="item" img_src = {slide_img_4}/>
</OwlCarousel>
</div>
)
}


export default Slide