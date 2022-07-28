import React from 'react'
import './Header.css';
import Avatar from "../../Icons/profile-pic (31).png"
import circle from "../../Icons/circle.svg"
import Navbar from '../Navbar/Navbar';
import { Zoom } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
import { Fade } from 'react-reveal';
import { Flip } from 'react-reveal';
import { Slide } from 'react-reveal';
import Wave from "../../Icons/svg__wave.svg"
const Header = () => {
  return (
   <>
   {/* <div className='relative bg'>
      <div>
    <Zoom left big duration={700}>
    <div className=" left_diamond">
    <svg xmlns="http://www.w3.org/2000/svg" width="1062.033" height="1073.871" viewBox="0 0 1062.033 1073.871">
  <rect id="Rectangle_83" data-name="Rectangle 83" width="817" height="697" rx="112" transform="matrix(0.656, 0.755, -0.755, 0.656, 526.033, 0)" fill="#242329"/>
</svg>
    </div>
    </Zoom>
    </div>
    <div>
      <Fade bottom delay={800}>
    <div className=" right_diamond1">
      
    <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" width="164" height="159.973" viewBox="0 0 164 159.973">
  <path id="Path_726" data-name="Path 726" d="M45.7,141.478a38.146,38.146,0,0,1,0-54.894l42.207-41.17a40.5,40.5,0,0,1,56.276,0l42.207,41.17a38.146,38.146,0,0,1,0,54.894l-42.207,41.171a40.505,40.505,0,0,1-56.276,0Z" transform="translate(-34.044 -34.044)" opacity={0.9} fill="#3d3c46"/>
</svg>

    </div>
    </Fade>
    </div>
    <div>
      <Fade bottom delay={550}>
    <div className=" absolute right-64 top-12 right_diamond2">
    <svg className='opacity-100 ' xmlns="http://www.w3.org/2000/svg" width="70" height="66" viewBox="0 0 70 66">
  <path id="Path_727" data-name="Path 727" d="M39.019,78.368a15.375,15.375,0,0,1,0-22.648L57.034,38.735a17.721,17.721,0,0,1,24.02,0L99.069,55.72a15.375,15.375,0,0,1,0,22.648L81.054,95.354a17.721,17.721,0,0,1-24.02,0Z" transform="translate(-34.044 -34.044)" fill="#242329"/>
</svg>

    </div>
    </Fade>
    </div>
<div className="container">
  <div className='z-10 content relative '>
  <section class=" absolute dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16  lg:grid-cols-12">
        <div class="z-10 sm:my-32 left-content  ml-24 place-self-center lg:col-span-7">
        <Fade duration={700} bottom>
          <div>
            <h1 class="max-w-2xl mb-4 text-4xl font-medium tracking-wide leading-none md:text-5xl xl:text-5xl text-white dark:text-white">Hi, I'm Arsalan</h1>
            </div>
          </Fade>

          <Fade delay={60} bottom>
            <div>
            <h1 class="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-4xl xl:text-3xl text-gray-500 dark:text-white">Frontend Developer</h1>
 </div>
 </Fade>
 <Fade bottom duration={1000} >
 <div>
            <p class="max-w-2xl mb-6 font-light tracking-normal  lg:mb-8 md:text-lg lg:text-xl text-white   ">Through constant practice & learning, 
 I produce <br/> aesthetic software to an extremely high standard.</p>
 </div>
 </Fade>
 

            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center hover:border-0 text-white hover:bg-black hover:text-white rounded-lg border  ">
            Contact Me
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="cv_btn inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-100  rounded-lg hover:bg-gray-100 hover:text-gray-900  dark:text-white  dark:hover:bg-gray-700 ">
            Download CV
            </a> 
        </div>
        <div class=" pic lg:mt-0  lg:col-span-4 md:col-span-6 lg:flex">
          <div className="z-10  mb-12 bg-circle">
<Slide  right  duration={800}>          
   <div className=''>
            <img  src={Avatar} alt="mockup"/>
      
            </div>
            </Slide>
 
            </div>

        </div>                
    </div>
</section>
  </div>
</div>

</div> */}
<div className=" relative bg-wrapper">

{/* left_diamond */}
<div className=" left_diamond">
    <svg xmlns="http://www.w3.org/2000/svg" width="1062.033" height="1073.871" viewBox="0 0 1062.033 1073.871">
  <rect id="Rectangle_83" data-name="Rectangle 83" width="817" height="697" rx="112" transform="matrix(0.656, 0.755, -0.755, 0.656, 526.033, 0)" fill="#242329"/>
</svg>
    </div>
    <div className=" right_diamond1">
      
      <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" width="164" height="159.973" viewBox="0 0 164 159.973">
    <path id="Path_726" data-name="Path 726" d="M45.7,141.478a38.146,38.146,0,0,1,0-54.894l42.207-41.17a40.5,40.5,0,0,1,56.276,0l42.207,41.17a38.146,38.146,0,0,1,0,54.894l-42.207,41.171a40.505,40.505,0,0,1-56.276,0Z" transform="translate(-34.044 -34.044)" opacity={0.9} fill="#3d3c46"/>
  </svg>
  
      </div>
      <div>
      <Fade bottom delay={550}>
    <div className=" absolute right-64 top-12 right_diamond2">
    <svg className='opacity-100 ' xmlns="http://www.w3.org/2000/svg" width="70" height="66" viewBox="0 0 70 66">
  <path id="Path_727" data-name="Path 727" d="M39.019,78.368a15.375,15.375,0,0,1,0-22.648L57.034,38.735a17.721,17.721,0,0,1,24.02,0L99.069,55.72a15.375,15.375,0,0,1,0,22.648L81.054,95.354a17.721,17.721,0,0,1-24.02,0Z" transform="translate(-34.044 -34.044)" fill="#242329"/>
</svg>

    </div>
    </Fade>
    </div>
      

<div class="pt-24">

<div class="container px-3 mx-auto flex flex-wrap  flex-row md:flex-row items-center">
  {/* <!--Left Col--> */}
  <div class="flex flex-col w-full md:text-left mx-auto md:w-2/5 left-content justify-center items-start text-center md:text-left">

    <h2 class="my-3 text-4xl tracking-light text-white font-normal leading-tight">Hi I'm Arsalan Khan </h2>
    <h1 class="my-1 text-3xl tracking-light text-gray-600 font-medium leading-tight">Frontend Developer </h1>
    <Fade bottom duration={1000} >
 <div>
            <p class=" mb-6 font-light  sm:text-xl lg:text-1xl tracking-normal  text-white   ">Through constant practice & learning, 
 I produce <br/> aesthetic software to an extremely high standard.</p>
 </div>
 </Fade>
 



    <button class="mx-auto lg:mx-0 hover:bg-black hover:text-white bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg">Contact ME</button>

  </div>
  {/* <!--Right Col--> */}
  <div class="relative w-full avatar_container  z-10  bottom-24 md:w-3/5 py-6 text-center">
    <div className=' bg-cover   -z-10' ><img className='circle absolute right-36 -z-10' src={circle} alt="" /></div>
    <img class="avatar w-full md:w-3/5 lg:w-3/5 mx-auto" src={Avatar}/>
  </div>

</div>

</div>
</div>

   </>
  )
}

export default Header