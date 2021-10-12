import React from 'react'


const GalleryItem = (props)=>{
   return(
    <div class="inner-box">
      <div class="image">
        <img src={props.img_src} alt="" />
        <div class="overlay-box">
            <div class="content">
                <h3><a href="http://main.html">Bedroom Luxury</a></h3>
                <div class="category">Apartments</div>
                <a class="arrow" href="http://main.html"><span class="flaticon-arrow-pointing-to-right"></span></a>
            </div>
        </div>
        </div>
    </div>
    
   )


}
export default GalleryItem
