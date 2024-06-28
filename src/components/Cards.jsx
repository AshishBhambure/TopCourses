import React, { useEffect, useState } from 'react'
import { apiUrl } from '../data'
import Card from './Card'
import Loader from './Loader';
import { toast } from 'react-toastify';
function Cards({filter}) {
const [cards,setCards] = useState([]);
const [loading,setLoading] = useState(true);
const [likedCourses,setLikedCourses] = useState([]);
 var d = [];
    useEffect(()=>{
        async function loadData(){
            setLoading(true)
        const result = await fetch(apiUrl);
        const data = await result.json();
        setLoading(false);
        // console.log(data.data.filter);
             if(filter !== 'All')
            {
                for(let key in data.data)
                    {
                        if(key === filter)
                            {
                                setCards([])
                               setCards(data.data[key])
                            }
                    }
               
            }
            else{
                let filterData = [];
                for(let key in data.data)
                    {
                        for(let val of data.data[key])
                            {
                                filterData.push(val);
                            }
                         
                    }

                    // console.log("All --> " , filterData);
                    setCards([]);
                    setCards(filterData);
            }

        }


        loadData();
        
    },[filter]);


   
// console.log(cards);

function handleLike(course){
    console.log(course);
    console.log(course.id);
    if( likedCourses.includes(course.id))
        {
            setLikedCourses((prevData)=>(
                prevData.filter((c)=>c !== course.id)
            ))

            toast.error("Like Removed !");
            return ;
        }
        else{
            toast.success("Like Added !")
            setLikedCourses((prevData)=>(
              [  ...prevData,course.id]
            ))
        }
   


}
if(loading)
    {
        return (
            <Loader></Loader>
        )
    }
  return (
    <div className=' min-h-[100vh] w-[1080px]  flex flex-row gap-7  py-3 justify-center items-center  flex-wrap mx-auto'>
        {
            cards.map((c)=>(<Card
             card = {c}
             likedCourses = {likedCourses}
             setLikedCourses= {setLikedCourses}
             handleLike ={handleLike}
            ></Card>))
        }
    </div>
  )
}

export default Cards
