import React from 'react'
import './Projects.css';
import icon1 from'../../Icons/repolink.svg'
import icon2 from'../../Icons/share.svg'
import { Slide } from 'react-reveal';
import { Zoom } from 'react-reveal';
import { Fade } from 'react-reveal';
const Projects = () => {
  const cardInfo=[
    {giticon:icon1,repolink: "https://github.com/Arsalan-kh/Recipes-App.git",  livelinks:"https://arsalan-kh.github.io/Recipes-App/" , livelinkicon:icon2,  title:"Recipe Cards",date:"30-jul-2021",desc:"Amazing mobile friendly recipe cards using Food API, It fetch the data from website and render it card.  "},
    {giticon:icon1,repolink:"https://github.com/Arsalan-kh/Filter-Product" ,  livelinks:"https://arsalan-kh.github.io/Filter-Product/" , livelinkicon:icon2, title:"Filter Products",date:"17-jul-2021",desc:"It is a simple small project with filter functionality. It filtered the products when user select categories."},
    {giticon:icon1,repolink:"https://github.com/Arsalan-kh/Weather_API.git" ,  livelinks:"https://arsalan-kh.github.io/Weather_API/" , livelinkicon:icon2, title:"Weather API",date:"27-jul-2021",desc:"Mobile responsive Weather App.This app has functionality of getting weather details based on city name searched by user."},
    {giticon:icon1,repolink:"https://github.com/Arsalan-kh/Todo-List-UI.git" ,  livelinks:"https://arsalan-kh.github.io/Todo-List-UI/" , livelinkicon:icon2, title:"Todo List UI",date:"7-jul-2021",desc:"It a classroom given task given by a instructor to design a same design as shown in screen shot."},
    {giticon:icon1,repolink:"https://github.com/Arsalan-kh/Text-generator" ,  livelinks:"https://arsalan-kh.github.io/Text-generator/" , livelinkicon:icon2, title:"Text Generator",date:"27-jun-2021",desc:"This Application checks whether the string is palandrome or not.If it's a palindrome then show a message to user and vice versa."},
    {giticon:icon1,repolink:"https://github.com/Arsalan-kh/News-API.git" ,  livelinks:"https://arsalan-kh.github.io/News-API/" , livelinkicon:icon2, title:"News API ",date:"12-Aug-2021",desc:"A News App using news fetch api it's fetch news data and render it in the form of cards.completely mobile responsive."},
  ]

  const Cardrender=(card,index)=>{
    return(
      <div class="">

      {/* <div class="">
        <div class="card_body flex flex-row  rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
          <img class="block h-auto icons  w-full lg:w-48 flex-none bg-cover h-24" src={card.icons}/>
          <div class="card_texts rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class=" card_title font-bold text-xl mb-2 leading-tight">{card.title}</div>
            <p class="text-grey-darker leading-normal text-sm ">{card.Subtitle}</p>
          </div>
        </div>
      </div> */}

<Fade  bottom count  duration={1800}  >
    <div class="">
      <div class="bg-zinc-800 backdrop-brightness-50 card m-2 cursor-pointer border-2 border-gray-800 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
        <div class="m-3 p-3 flex flex-row justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="35.1" height="35.763" viewBox="0 0 40.1 35.763">
  <path id="Path_564" data-name="Path 564" d="M23.4,583.821a1.914,1.914,0,0,1,.6,1.473,2.066,2.066,0,0,1-.6,1.473,1.888,1.888,0,0,1-2.807,0l-4-4.2a2.116,2.116,0,0,1,0-2.946A1.876,1.876,0,0,1,18,579a1.741,1.741,0,0,1,1.4.625ZM18,579a1.806,1.806,0,0,1,1.4.625A1.985,1.985,0,0,1,20,581.1a2.066,2.066,0,0,1-.6,1.473,1.806,1.806,0,0,1-1.4.625H10a4.2,4.2,0,0,0-2.105.516,3.249,3.249,0,0,0-1.4,1.435A4.854,4.854,0,0,0,6,587.391v18.881a4.77,4.77,0,0,0,.491,2.209,3.458,3.458,0,0,0,1.4,1.471,4.2,4.2,0,0,0,2.105.516H34a4.275,4.275,0,0,0,2.14-.516,3.251,3.251,0,0,0,1.368-1.471A4.771,4.771,0,0,0,38,606.272V591.587a4.855,4.855,0,0,0-.491-2.245,3.061,3.061,0,0,0-1.368-1.435,4.275,4.275,0,0,0-2.14-.516H22a1.877,1.877,0,0,1-1.4-.625,2.066,2.066,0,0,1-.6-1.473,1.984,1.984,0,0,1,.6-1.473A1.877,1.877,0,0,1,22,583.2H34a7.392,7.392,0,0,1,4,1.141,7.767,7.767,0,0,1,2.912,3.054,8.344,8.344,0,0,1,1.088,4.2v14.685a8.479,8.479,0,0,1-1.088,4.2A8.1,8.1,0,0,1,38,613.522a7.392,7.392,0,0,1-4,1.141H10a7.508,7.508,0,0,1-4-1.141,8.513,8.513,0,0,1-4-7.25V587.391a8.344,8.344,0,0,1,1.088-4.2A8.109,8.109,0,0,1,6,580.141,7.506,7.506,0,0,1,10,579Z" transform="translate(-1.95 -578.95)" fill="#6a5fd5" stroke="#707070" stroke-width="0.1"/>
</svg>

         {/* <span class="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">Tag</span> */}
         <div className="flex flex-row justify-end">
         <span class=" px-2 animate-pulse"> <a href={card.repolink}><img src={card.giticon}/></a>
</span>
         <span class=" px-2 animate-pulse"> <a href={card.livelinks}><img src={card.livelinkicon} alt="" /></a>
</span>
         </div>
        </div>
        <h3 className='text-white m-3 text-xl tracking-widest p-3'>{card.title}</h3>
        <small className=' project_date text-gray-400 m-3 p-3'>{card.date}</small>
        <p class=" m-3 p-3 font-light font-mono text-sm text-gray-200 hover:text-gray-100 transition-all duration-200">{card.desc}</p>
      <div className="flex m-3 p-3 chips">
        <span className='text-white tracking-wider p-3  border-2 border-indigo-800      hover:bg-white hover:text-black hover:border-2 border-purple-500  rounded-full  font-bold'>Bootstrap</span>
        <span className='text-white tracking-wider p-3 ml-2 border-2 border-indigo-800  hover:bg-white hover:text-black hover:border-2 border-purple-500  text-center p-3 w-14 font-bold rounded-full  '>CSS3</span>
        <span className='text-white tracking-wider  p-3 ml-2 border-2 border-indigo-800 hover:bg-white hover:text-black hover:border-2 border-purple-500  font-bold  rounded-full '>HTML5</span>
      </div>
      </div>
    </div>
    </Fade>
  </div>
    
    )
  }
  return (
    <div>
        <h1 className='mb-12 text-white project_heading font-bold container   text-xl  lg:mt-12 px-12  z-10'>Projects</h1>
        
        <p className='p-4  w-11/12 project_alert contianer tracking-widest mx-auto px-12'>   For more projects visit to my github profile  </p>
    
      
      <div className="project_cards border-0 container mx-auto grid md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1   mt-4 ">
          {cardInfo.map(Cardrender)}
          </div>


    </div>
  )
}

export default Projects