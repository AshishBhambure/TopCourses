import React from 'react'
import { filterData } from '../data'
function NavBar({filter,setFilter}) {
  return (
    <div
     className='flex flex-row justify-center items-center text-white gap-5 py-4'
    >
         {
            filterData.map((obj)=>(<div key={obj.id}
                onClick={()=>{setFilter(obj.title)}}
              className={` cursor-pointer  bg-slate-900 rounded-md py-1 px-2 ${ filter === obj.title ? ' border border-white ' : ' '}`}
            > {obj.title}</div>))
         }
    </div>
  )
}

export default NavBar;
