import React from 'react'
import './Skill.css';       
import icon1 from"../../Icons/Html5_o.svg"
import icon2 from"../../Icons/git_o.svg"          
import icon3 from"../../Icons/CSS3_o.svg"         
import icon4 from"../../Icons/JS_o.svg"   
import icon5 from"../../Icons/npm_o.svg"          
import icon6 from"../../Icons/react_0.svg"
import { Zoom } from 'react-reveal';
import Reveal from 'react-reveal/Reveal';
import { Fade } from 'react-reveal';
import { Flip } from 'react-reveal';
import { Slide } from 'react-reveal';

const Skill = () => {

  const cardInfo=[
                  {icons:icon1  ,title:"Html5",Subtitle:"Hyper text markup language for documents designed"},
                  {icons:icon2  ,title:"Git",Subtitle:"Git is a free and open source distributed version control system"},
                  {icons:icon3  ,title:"CSS3",Subtitle:"Cascading stye sheet.It describe html elements on screen"},
                  {icons:icon4  ,title:"JS",Subtitle:"Javascript is a programming Language"},
                  {icons:icon5  ,title:"NMP",Subtitle:"npm is a node  package manager for javascript"},
                  {icons:icon6  ,title:"React",Subtitle:"React is a JS library based on components"},
                ]
                const Cardrender=(card,index)=>{
                  return(
                    <div class="">
  
                    <div class="">
                      <div class="card_body flex flex-row  rounded overflow-hidden h-auto sm:flex-col lg:flex-row ">
                        <img   class="skill_icons block h-auto icons  w-full lg:w-48 flex-none bg-cover h-24" src={card.icons}/>
                        <div class="card_texts rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                          <div class=" card_title font-bold text-xl mb-2 leading-tight">{card.title}</div>
                          <p class="text-grey-darker leading-normal text-sm ">{card.Subtitle}</p>
                        </div>
                      </div>
                    </div>
                    </div>
                  )
                }
  return (
    <div className=' '>
      <div>
      <Fade left duration={700}>
      <div className='skill_heading'>      <h1 className='mb-12  font-bold container   text-xl  lg:mt-12 px-12 text-white z-10'>Skills</h1></div>
      </Fade>
      </div>
      
<div className="card_container w-auto grid mt-6 mb-24 sm:mx-24 gap-x-4 gap-y-8 grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-item-center ">
          {cardInfo.map(Cardrender)}
          </div>
       
          </div>

  )
}

export default Skill