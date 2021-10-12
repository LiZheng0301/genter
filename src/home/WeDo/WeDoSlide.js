
import React from 'react'
import Carousel from 'nuka-carousel'
import ImageCard from './ImageCard'
import img1 from '../../assets/images/resource/we-do-1.jpg'
import img2 from '../../assets/images/resource/we-do-2.jpg'
import img3 from '../../assets/images/resource/we-do-1.jpg'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
const WeDoSlide = () => {

  const theme = useTheme();
  const mddown = useMediaQuery(theme.breakpoints.down('md'))
  const lgdown = useMediaQuery(theme.breakpoints.up('lg'))
  //  const matches = useMediaQuery('(min-width:700px)');

  let SlideToShowNumber = 2;
  if (mddown) {
    SlideToShowNumber = 1;
  }
  if (lgdown) {
    SlideToShowNumber = 3;
  }


  return (
    <div className="slidecontainer"> 
      <Carousel slidesToShow={SlideToShowNumber}   wrapAround='true' cellSpacing={30} slidesToScroll="SlideToShowNumber" autoplay='true' defaultControlsConfig={{
        nextButtonText: <FaLongArrowAltRight />,
        prevButtonText: <FaLongArrowAltLeft />
      }}>
        <ImageCard img_src={img3} design='Apartsment' />
        <ImageCard img_src={img1} design='Office' />
        <ImageCard img_src={img2} design='Landscape' />
        <ImageCard img_src={img3} design='Apartsment' />
        <ImageCard img_src={img1} design='Office' />
        <ImageCard img_src={img2} design='Landscape' />
        <ImageCard img_src={img3} design='Apartsment' />
        <ImageCard img_src={img1} design='Office' />
        <ImageCard img_src={img2} design='Landscape' />

      </Carousel></div>
  )

}
export default WeDoSlide





// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';


// const WeDoSlide = ()=>{


// return(
//     <div className="slideContainer">
//   <AwesomeSlider cssModule={AwesomeSliderStyles}>
//     <div data-src="/images/gallery/9.jpg">
// </div>
//     <div data-src="/images/gallery/10.jpg" />
//     <div data-src="/images/gallery/11.jpg" />
//   </AwesomeSlider>
//   </div>
// )
// }

// export default WeDoSlide


// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// const WeDoSlide = ()=>{


// return(
// <Carousel responsive={responsive} showDots='true' centerMode='true' infinite='true'>
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
//   <div>Item 5</div>
//   <div>Item 6</div>
//   <div>Item 7</div>
//   <div>Item 8</div>
//   <div>Item 9</div>
// </Carousel>)
// }
// export default WeDoSlide