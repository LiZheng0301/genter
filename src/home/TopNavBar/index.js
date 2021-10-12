// import React from 'react'
// import './index.scss'
// import Navbar from './Navbar'
// const TopNavBar = ()=>{
//     return(
//         <div>
//             <Navbar/>

//             {/* <ul className="navigation">
//                 <li className="dropdown">Home</li>
//                     <div>
                        
//                     </div>
//                 <li>Features</li>
//                 <li>Pages</li>
//                 <li>Elements</li>
//                 <li>Portfolio</li>
//                 <li>Blog</li>
//                 <li>Shop</li>
//                 <li>Contact</li>
                
//             </ul> */}
//         </div>


//     )}

// export default TopNavBar

import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import logo from "../../assets/images/logo-yellow-2.png";
// import Loader from "react-loader-spinner";
import {
  faHome,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs,
  faAnchor,
  faDizzy,
  faBell,
  faGhost,
  faFan,
  faCarSide,
  faAdjust,
  faJedi,
  faKey,
  faWater,
  faLaughBeam,
  faCheese,
  faShoppingCart,
  faAddressBook,
  faBlog,
  faAppleAlt,
  faEllipsisH,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
 
import "reactjs-navbar/dist/index.css";
import "./index.scss"
import HomePageLayouts from './HomePageLayouts'
import instance from '../../pages/Instance'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
 
const TopNavBar = ()=> {
//   state = {
//     isLoading: false,
//   };
const token = localStorage.getItem('token')
const history = useHistory()
const dispatch = useDispatch()
const logout = ()=>{
  
  localStorage.clear()
  instance(token).post('/logout')
   history.push('/')
    dispatch({type: 'RESET'})
}
    return (
        <div className="navigation">
      <Navbar
        logo={logo}
        // loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        // isLoading={this.state.isLoading}
        menuItems={[
          {
            title: "Home",
            icon:faHome,
            isAuth: true,
            id: 'ss',
            onCick: ()=>{
              alert('lll')
            },
            subItems: [
              {
              title: <HomePageLayouts/>, 
              isAuth: true 
              },
            ],
          },
          {
            title: "Features",
            icon: faBookOpen,
            isAuth:true,
            subItems: [
                {
                  title: "Headers",
                  isAuth: true,
                  subItems: [
                    {
                    title: "Header Layout 01", 
                    isAuth: true ,
                    subItems: [
                        {
                        title: "Header Style 01", 
                        isAuth: true 
                        },
                        {
                          title: "Header Style 02",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 03",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 04",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 05",
                          isAuth: true,
                        },
                      ],
                    },
                    {
                      title: "Header Layout 02",
                      isAuth: true,
                      subItems: [
                        {
                        title: "Header Style 06", 
                        isAuth: true 
                        },
                        {
                          title: "Header Style 07",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 08",
                          isAuth: true,
                        },
                        {
                            title: "Header Style 09",
                            isAuth: true,
                          },
                          {
                            title: "Header Style 10",
                            isAuth: true,
                          },
                      ],
                    },
                    {
                      title: "Header Layout 03",
                      isAuth: true,
                      subItems: [
                        {
                         title: "Header Style 11", 
                        isAuth: true 
                        },
                        {
                          title: "Header Style 12",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 13",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 14",
                          isAuth: true,
                        },
                        {
                          title: "Header Style 15",
                          isAuth: true,
                        },
                      ],
                    },
                    {
                        title: "Header Layout 04",
                        isAuth: true,
                        subItems: [
                            {
                            title: "Header Style 16", 
                            isAuth: true 
                            },
                            {
                              title: "Header Style 17",
                              isAuth: true,
                            },
                            {
                              title: "Header Style 18",
                              isAuth: true,
                            },
                            {
                              title: "Header Style 19",
                              isAuth: true,
                            },
                            {
                              title: "Header Style 20",
                              isAuth: true,
                            },
                          ],
                      },
                  ],
                },
                {
                  title: "Wigets",
                  isAuth: true,
                  subItems: [
                    { title: "Search Widgets", isAuth: true },
                    {
                      title: "Category Widgets",
                      isAuth: true,
                    },
                    {
                      title: "News Widget",
                      isAuth: true,
                    },
                    {
                        title: "Social Widget",
                        isAuth: true,
                      },
                      {
                        title: "Tag Widget",
                        isAuth: true,
                      },
                      {
                        title: "Info Widget",
                        isAuth: true,
                      },
                      {
                        title: "Lists Widget",
                        isAuth: true,
                      },
                      {
                        title: "Subscribe Widget",
                        isAuth: true,
                      },
                      {
                        title: "Price Range Widget",
                        isAuth: true,
                      },
                      {
                        title: "Page Nav Widget",
                        isAuth: true,
                      },
                      {
                        title: "Newsletter Widget",
                        isAuth: true,
                      },
                      {
                        title: "Author Widget",
                        isAuth: true,
                      },

                  ],
                },
                {
                  title: "Sliders",
                  isAuth: true,
                  subItems: [
                    {
                    title: "Revolution Slider", 
                    isAuth: true ,
                    subItems: [
                        {
                        title: "Revolution 01", 
                        isAuth: true 
                        },
                        {
                          title: "Revolution 02",
                          isAuth: true,
                        },
                      ],
                    },
                    {
                      title: "Owl Slider",
                      isAuth: true,
                      subItems: [
                        {
                        title: "Owl Slider 01", 
                        isAuth: true 
                        },
                        {
                          title: "Owl Slider 02",
                          isAuth: true,
                        },
                        {
                          title: "Owl Slider 03",
                          isAuth: true,
                        },
                        {
                            title: "Owl Slider 04",
                            isAuth: true,
                          },
                          {
                            title: "Owl Slider 05",
                            isAuth: true,
                          },
                          {
                            title: "Owl Slider 06",
                            isAuth: true,
                          },
                      ],
                    },
                    {
                      title: "Flex Slider",
                      isAuth: true,
                      subItems: [
                        {
                         title: "Flex Slider 01", 
                        isAuth: true 
                        },
                        {
                          title: "Flex Slider 02",
                          isAuth: true,
                        },
                        {
                          title: "Flex Slider 03",
                          isAuth: true,
                        },
                      ],
                    },
                    {
                        title: "Swiper Slider",
                        isAuth: true,
                        subItems: [
                            {
                            title: "Swiper Slider 01", 
                            isAuth: true 
                            },
                            {
                              title: "Swiper Slider 02",
                              isAuth: true,
                            },
                            {
                              title: "Swiper Slider 03",
                              isAuth: true,
                            },
                          ],
                      },
                      {
                        title: "Master Slider",
                        isAuth: true,
                        subItems: [
                            {
                            title: "Master Slider 01", 
                            isAuth: true 
                            },
                            {
                              title: "Master Slider 02",
                              isAuth: true,
                            },
                            {
                              title: "Master Slider 03",
                              isAuth: true,
                            },
                          ],
                      },
                  ],
                },
                {
                  title: "Page Title",
                  isAuth: true,
                  subItems: [
                    { 
                      title: "Align Left",
                     isAuth: true 
                    },
                    {
                      title: "Align Center",
                      isAuth: true,
                    },
                    {
                      title: "Align Right",
                      isAuth: true,
                    },
                    {
                      title: "Light Style",
                      isAuth: true,
                    },
                    {
                      title: "Pattern Layout Style",
                      isAuth: true,
                    },
                  ],
                },
                {
                  title: "Section Title",
                  isAuth: true,
                  subItems: [
                    { 
                      title: "Align Left",
                     isAuth: true 
                    },
                    {
                      title: "Align Center",
                      isAuth: true,
                    },
                    {
                      title: "Align Right",
                      isAuth: true,
                    },
                    {
                      title: "Light Style",
                      isAuth: true,
                    },
                    {
                      title: "Pattern Layout Style",
                      isAuth: true,
                    },
                  ],
                },
                {
                  title: "Contact Form",
                  isAuth: true,
                  subItems: [
                    { 
                      title: "Contact Form 01",
                     isAuth: true 
                    },
                    {
                      title: "Contact Form 02",
                      isAuth: true,
                    },
                    {
                      title: "Contact Form 03",
                      isAuth: true,
                    },
                    {
                      title: "Contact Form 04",
                      isAuth: true,
                    },
                  ],
                },
                {
                  title: "Footer",
                  isAuth: true,
                  subItems: [
                    { 
                      title: "Footer 01",
                     isAuth: true 
                    },
                    {
                      title: "Footer 02",
                      isAuth: true,
                    },
                    {
                      title: "Footer 03",
                      isAuth: true,
                    },
                    {
                      title: "Footer 04",
                      isAuth: true,
                    },
                  ],
                },
                {
                  title: "Maps",
                  isAuth: true,
                  subItems: [
                    { 
                      title: "Maps 01",
                     isAuth: true 
                    },
                    {
                      title: "Maps 02",
                      isAuth: true,
                    },
                    {
                      title: "Maps 03",
                      isAuth: true,
                    },
                    {
                      title: "Maps 04",
                      isAuth: true,
                    },
                  ],
                },
              ],
          },
          {
            title: "Pages",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "Elements",
            icon: faEllipsisH,
            isAuth: true,
            subItems: [
              {
                title: "Subitem 1",
                icon: faAnchor,
                isAuth: true,
              },
              {
                title: "Subitem 2",
                icon: faDizzy,
                isAuth: true,
                subItems: [
                  { title: "Subitem 2-1", icon: faAdjust, isAuth: true },
                  {
                    title: "Subitem 2-2",
                    icon: faBell,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Subitem 2-2-1",
                        icon: faGhost,
                        isAuth: true,
                        subItems: [
                          {
                            title: "Subitem 2-2-2-1",
                            icon: faFan,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-2",
                            icon: faCarSide,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-3",
                            icon: faJedi,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-4",
                            icon: faLaughBeam,
                            isAuth: true,
                          },
                        ],
                      },
                      {
                        title: "Subitem 2-2-2",
                        icon: faKey,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Make request",
                    icon: faCheese,
                    isAuth: true,
                  },
                ],
              },
              {
                title: "Subitem 3",
                icon: faWater,
                isAuth: true,
              },
            ],
          },
          {
            title: "Portfolio",
            icon: faAppleAlt,
            isAuth: true,
          },
          {
            title: "Blog",
            icon: faBlog,
            isAuth: true,
          },
          {
            title: "Shop",
            icon: faShoppingCart,
            isAuth: true,
          },
          {
            title: "Contact",
            icon: faAddressBook,
            isAuth: true,
          },
          {
            title: "Logout",
            icon: faOutdent,
            isAuth: true,
            onCick: {
              logout
            },
          },

        ]}
      />

      </div>
    );
}
export default TopNavBar