import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";


function Card({ card , likedCourses,setLikedCourses,handleLike}) {
    const [show,setShow] = useState('Read More')
    
  console.log(card);
  let d = card.description.substring(0, 200) + "...";
  const [des,setDes] = useState(d);
  function descriptionHandler(){
     if(show === 'Read More'){
          d = card.description;
          setDes(d);
          setShow('Read Less');
     }
     else{
       setShow('Read More');
       d = card.description.substring(0, 200) + "...";
       setDes(d);
     }
  }
  return (
    <div className=' w-[30%]  bg-slate-900 text-white rounded-lg'>
      <div className=' relative h-[200px]'>
        <img
          src={`${card.image.url}`}
          className=' absolute max-w-full h0[300px] overflow-hidden  top-0 rounded-t-lg'
          alt={card.title}
        />

        <button className=' absolute top-2 right-2 w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center'
         onClick={()=>{
            handleLike(card);
         }}
        >
            {
                likedCourses.includes(card.id) ? <FcLike className='  text-xl' /> : <FcLikePlaceholder className='  text-xl' /> 
            }
            
        </button>

      </div>

      <div className='font-semibold text-xl py-2 '>
        {card.title}
      </div>
      <p className='p-1  px-2'>
        {des}
        <button
         onClick={descriptionHandler}
         className=' text-purple-600'
        >
            {show}
        </button>
      </p>
    </div>
  );
}

export default Card;
