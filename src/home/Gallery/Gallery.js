import React, {useEffect} from 'react'
import mixitup from 'mixitup'
import './gallery.scss'
import img_src from './IMG_SRC'
import GalleryItem from './GalleryItem'
import SectionTitle from '../SectionTitle'

const Gallery =()=>{
    useEffect(() => {
         mixitup('.gallery-container');

  

      },[]);
    
    return(

        <div className="gallery">
            <SectionTitle number="03" title="Featured projects" TitleColor = "#ffffff" NumberOpacity="0.3"/>
           <div className="buttons">
              <button type="button" data-filter="all">All</button>
               <button type="button" data-filter=".apartments">Apartments</button>
                <button type="button" data-filter=".hotels">Hotels</button>
                <button type="button" data-filter=".bars">Bars</button>
                <button type="button" data-filter=".restaurants">Restaurants</button>
                <button type="button" data-filter=".stores">Stores</button>
                <button type="button" data-filter=".offices">Offices</button>
            </div>          
           <div container className="gallery-container">
                     <div item className="mix offices hotels stores" data-order="1" lg={3} md={6} sm={12}>
                        <GalleryItem img_src={img_src[1]}/>
                     </div>
                      <div item className="mix offices bars stores" data-order="1" lg={3} md={6} sm={12}>
                          <GalleryItem img_src={img_src[2]}/>
                     </div>
                     <div item className="mix offices bars apartments" data-order="1" lg={3} md={6} sm={12}>
                        <GalleryItem img_src={img_src[3]}/>
                     </div>
                     <div item className="mix offices hotels restaurants stores" data-order="1" lg={3} md={6} sm={12}>
                        <GalleryItem img_src={img_src[4]}/>
                     </div>
                     <div item className="mix apartments bars stores" data-order="1" lg={3} md={6} sm={12}>
                     <GalleryItem img_src={img_src[5]}/>
                     </div>
                     <div item className="mix restaurants stores hotels apartments" data-order="1" lg={3} md={6} sm={12}>
                     <GalleryItem img_src={img_src[6]}/>
                     </div>
                     <div item className="mix offices bars stores restaurants" data-order="1" lg={3} md={6} sm={12}>
                     <GalleryItem img_src={img_src[7]}/>
                     </div>
                     <div item className="mix offices apartments restaurants stores hotels" data-order="1" lg={3} md={6} sm={12}>
                     <GalleryItem img_src={img_src[8]}/>
                     </div>
                     

            </div>
        </div>


        
    )

}
export default Gallery

