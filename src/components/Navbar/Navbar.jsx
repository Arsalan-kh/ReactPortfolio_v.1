import React from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
// import { Popover, Transition } from '../@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Giticon from "../../Icons/github-outline.svg"
import Linkedin from "../../Icons/linkedin-svgrepo-com.svg"
import Instagram from "../../Icons/instagram.svg"
import './Navbar.css';



const Navbar = () => {
  const [navbar,setNavbar]=useState(false)

  const changeBg=()=>{
    if(window.scrollY>=80){
      setNavbar(true)
      
    }
    else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBg)
  return (
    <>


<div >
  
<nav className={navbar ? 'navbar active' : 'navbar' }>
  <div className=" fixed  top-0 w-full z-30">
<div className="nav_links mx-12 z-10 ">
<a href="https://github.com/Arsalan-kh"><svg className='hover:blue-800' xmlns="http://www.w3.org/2000/svg" width="32.144" height="31.188" viewBox="0 0 32.144 31.188">
  <path id="github-alt" d="M31.05,6.824a7.437,7.437,0,0,1,2.082,5.229c0,7.22-4.581,9.336-8.887,9.959a5.191,5.191,0,0,1,.694,2.864v5.1a.931.931,0,0,1-.972,1,1.165,1.165,0,0,1-.79-.288.932.932,0,0,1-.321-.708v-5.1a3.214,3.214,0,0,0-1.111-2.864l.694-1.619c4.305-.5,8.749-1.743,8.749-8.465a6.106,6.106,0,0,0-1.944-4.358l-.278-.995A4.993,4.993,0,0,0,29.1,2.842a11.37,11.37,0,0,0-4.441,1.868l-.835.123a22.585,22.585,0,0,0-10,0L13,4.709C10.5,3.34,9.112,2.966,8.416,2.966A4.96,4.96,0,0,0,8.553,6.7L8.277,7.7a5.954,5.954,0,0,0-2.083,4.358c0,6.6,4.166,7.967,8.748,8.465l.556,1.619a3.112,3.112,0,0,0-1.111,2.739V30.1a.932.932,0,0,1-.321.708,1.229,1.229,0,0,1-1.58,0,.932.932,0,0,1-.321-.708V27.241C7.583,28.113,5.777,26,4.389,24.379c-.694-.747-1.25-1.37-1.944-1.494a1.27,1.27,0,0,1-.417-1.121.922.922,0,0,1,1.251-.623,5.7,5.7,0,0,1,3.052,2.117c1.251,1.494,2.5,2.862,6.25,2.117v-.5a4.25,4.25,0,0,1,.694-2.864C9.109,21.267,4.25,19.15,4.25,12.055A7.439,7.439,0,0,1,6.333,6.826a7.958,7.958,0,0,1,.417-5.1l.694-.5c.278-.125,2.222-.5,6.247,1.742a23.208,23.208,0,0,1,10.137,0C27.717.6,29.8.973,30.078,1.1l.694.5A7.553,7.553,0,0,1,31.05,6.824Z" transform="translate(-1.488 -0.411)" fill="#fafafa" stroke="#fafafa" stroke-width="1"/>
</svg>
</a>
<a href="https://www.linkedin.com/in/arsalan-khan-1879b11b0/"><svg xmlns="http://www.w3.org/2000/svg" width="32.213" height="32.132" viewBox="0 0 32.213 32.132">
  <g id="linkedin-svgrepo-com_1_" data-name="linkedin-svgrepo-com (1)" transform="translate(0.5 0.5)">
    <g id="Group_19" data-name="Group 19" transform="translate(0 0)">
      <path id="Path_687" data-name="Path 687" d="M3.662.492A3.457,3.457,0,0,0,0,3.97,3.418,3.418,0,0,0,3.588,7.447,3.756,3.756,0,0,0,6.276,6.436,3.408,3.408,0,0,0,7.286,3.955,3.446,3.446,0,0,0,3.662.492ZM5.329,5.463a2.433,2.433,0,0,1-1.741.626A2.082,2.082,0,0,1,1.358,3.97a2.1,2.1,0,0,1,2.3-2.12A2.094,2.094,0,0,1,5.929,3.971,2.058,2.058,0,0,1,5.329,5.463Z" transform="translate(0 -0.492)" fill="#fafafa" stroke="#fafafa" stroke-linecap="round" stroke-width="1"/>
      <path id="Path_688" data-name="Path 688" d="M.959,34.864h6.1V12.422H.959ZM2.317,13.78H5.7V33.5H2.317Z" transform="translate(-0.308 -3.732)" fill="#fafafa" stroke="#fafafa" stroke-linecap="round" stroke-width="1"/>
      <path id="Path_689" data-name="Path 689" d="M27.664,12.422a7.932,7.932,0,0,0-5.567,1.9l-.191-1.9H15V34.863h6.763V23.069a6.933,6.933,0,0,1,.335-1.841c.817-1.76,1.919-1.76,3.588-1.76A3.808,3.808,0,0,1,29.234,23.4v11.46h6.791V22.185C36.025,15.477,31.691,12.422,27.664,12.422Zm7,21.083H30.592V23.4a5.18,5.18,0,0,0-4.905-5.3c-1.706,0-3.639,0-4.821,2.547a7.841,7.841,0,0,0-.461,2.413V33.505H16.358V13.78h4.319l.277,2.746h1.113l.2-.321c.453-.729,1.885-2.426,5.4-2.426,3.373,0,7,2.63,7,8.4Z" transform="translate(-4.812 -3.732)" fill="#fafafa" stroke="#fafafa" stroke-linecap="round" stroke-width="1"/>
    </g>
  </g>
</svg>
</a>
<a href="https://www.instagram.com/arsalankh1999/"><svg xmlns="http://www.w3.org/2000/svg" width="31.214" height="31.132" viewBox="0 0 31.214 31.132">
  <path id="Path_729" data-name="Path 729" d="M18.6,34.137c-4.264,0-4.766-.022-6.43-.095a11.45,11.45,0,0,1-3.787-.777,7.989,7.989,0,0,1-4.558-4.541A11.337,11.337,0,0,1,3.1,24.949C3,23.3,3,22.753,3,18.54c0-4.258.023-4.755.1-6.4a11.335,11.335,0,0,1,.726-3.77A7.974,7.974,0,0,1,8.389,3.823,11.364,11.364,0,0,1,12.174,3.1C13.829,3,14.373,3,18.6,3c4.3,0,4.792.022,6.43.093a11.436,11.436,0,0,1,3.8.725,7.983,7.983,0,0,1,4.563,4.543,11.305,11.305,0,0,1,.73,3.827c.1,1.654.1,2.194.1,6.406s-.024,4.764-.1,6.4a11.356,11.356,0,0,1-.728,3.778,8,8,0,0,1-4.565,4.543,11.5,11.5,0,0,1-3.789.723C23.382,34.137,22.84,34.137,18.6,34.137Zm-.059-28.4c-4.239,0-4.68.021-6.335.095a8.679,8.679,0,0,0-2.893.537A5.17,5.17,0,0,0,6.335,9.324,8.626,8.626,0,0,0,5.8,12.236C5.7,13.909,5.7,14.347,5.7,18.54c0,4.143.016,4.645.092,6.307a8.715,8.715,0,0,0,.539,2.883,5.174,5.174,0,0,0,2.979,2.953,8.559,8.559,0,0,0,2.893.537c1.678.1,2.12.1,6.335.1,4.251,0,4.692-.021,6.333-.1a8.631,8.631,0,0,0,2.894-.537,5.189,5.189,0,0,0,2.964-2.95,8.673,8.673,0,0,0,.539-2.914h.019c.075-1.65.075-2.09.075-6.307s-.019-4.661-.094-6.309a8.7,8.7,0,0,0-.539-2.879,5.189,5.189,0,0,0-2.964-2.955,8.6,8.6,0,0,0-2.894-.537C23.2,5.737,22.76,5.737,18.542,5.737ZM18.6,26.513a7.975,7.975,0,1,1,8.007-7.982A8.013,8.013,0,0,1,18.6,26.513Zm0-13.163a5.178,5.178,0,1,0,5.2,5.178A5.189,5.189,0,0,0,18.6,13.35Zm8.319-1.231a1.867,1.867,0,1,1,1.326-.544A1.865,1.865,0,0,1,26.92,12.119Z" transform="translate(-3.002 -3.005)" fill="#fff"/>
</svg>
</a>

 
</div>

<button className='logo-btn mx-6 z-10'>
 <svg xmlns="http://www.w3.org/2000/svg" width="250.953" height="23.393" viewBox="0 0 178.93 19.393">
  <path id="Path_727" data-name="Path 727" d="M35.625,47.068a4.293,4.293,0,0,1,0-6.655l5.724-4.991a5.972,5.972,0,0,1,7.632,0L54.7,40.414a4.293,4.293,0,0,1,0,6.655L48.981,52.06a5.972,5.972,0,0,1-7.632,0Z" transform="translate(52.667 -33.044)" fill="#6a5fd5"/>
  <text id="frontendAk" transform="translate(0 17)" fill="#fff" font-size="20" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600" letter-spacing="0.03em"><tspan x="0" y="0">frontendAk</tspan></text>
</svg>

 </button>
 <div className="absolute z-10 top-5 left-12 ak">
<svg xmlns="http://www.w3.org/2000/svg" width="44.199" height="41.674" viewBox="0 0 44.199 41.674">
  <path id="Path_731" data-name="Path 731" d="M37.185,62.031a9.708,9.708,0,0,1,0-14.3L48.56,37.006a11.19,11.19,0,0,1,15.167,0L75.1,47.731a9.708,9.708,0,0,1,0,14.3L63.727,72.756a11.19,11.19,0,0,1-15.167,0Z" transform="translate(-34.044 -34.044)" fill="#6a5fd5"/>
  <text id="Ak" transform="translate(10 27)" fill="#fafafa" font-size="20" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">Ak</tspan></text>
</svg>

</div>
</div>
</nav>



 </div>
      
    </>
  )
}

export default Navbar