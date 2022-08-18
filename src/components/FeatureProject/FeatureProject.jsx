import React from 'react'
import './FeatureProject.css';
import { useState } from "react";
import {Carousel} from '3d-react-carousal';
import pic1 from '../../Icons/img1.png'
import pic2 from '../../Icons/img2.png'

import circle from "../../Icons/circle.svg"

let slides = [
  <a href="https://62fe7bb34914420ff9627aa8--sparkly-stardust-835b06.netlify.app/"><img className='hover:opacity:95 hover: shadow-2xl hover:bg-white' src={pic1} alt="1" /></a>, 
  <a href="https://strong-sopapillas-cae5e7.netlify.app/"><img className='hover:opacity:95 hover: shadow-2xl hover:bg-white' src={pic2} alt="2" /></a>,
  <a href="https://strong-sopapillas-cae5e7.netlify.app/"><img className='hover:opacity:95 hover: shadow-2xl hover:bg-white' src={pic2} alt="3" /></a>
 
   ];

   
// let slides = [
//   {link:"https://github.com/Arsalan-kh/Recipes-App.git", picture:pic1},
//   {link:"https://github.com/Arsalan-kh/Recipes-App.git", picture:pic1},
//   {link:"https://github.com/Arsalan-kh/Recipes-App.git", picture:pic1}

  
//    ];


  const callback = function(index){
    console.log("callback",index);
}
const FeatureProject = () => {
  
  return (
   
    <>
 <div className='skill_heading'><h1 className='mb-12  font-bold container   text-xl  lg:mt-12 px-12 text-white z-10'>Feature Projects</h1></div>
    <div className='container slider-wrapper  md:items-center mx-auto grid md:gird-cols-1 lg:grid-cols-2 mb-24 overflow-hidden   '>
      
  
      {/* slider div */}
      <div className=''>
      <Carousel slides={slides} autoplay={true} interval={5000} onSlideChange={callback}/>
      </div>
        {/* content div */}
        <div className='slider-info  sm:w-12/12 md:w-12/12 sm:grid-cols-4 my-12 '>
          <h1 className=' text-4xl  font-bold mb-12 text-white '>React Projects </h1>
          <p className='text-white  font-light    md:text-justify sm:w-full md:w-12/12  lg:w-4/5'>Some of my recent work on react which I learns lot of new things and how it's work
            how we manage state , render components and many more check out the demo!
          </p>
          {/* <a href="#" className=' lg:mx-0 hover:bg-black hover:text-white bg-indigo-500 text-gray-100 font-bold rounded my-12  py-3 px-8 shadow-lg'  > See Demo</a> */}
        </div>
        </div>
    </>
  )
}

export default FeatureProject