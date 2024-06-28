import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
const App = () => {
 
  const [filter,setFilter] = useState('All');
  console.log(filter);
  return (

    <div className=" bg-slate-600 min-h-[100vh] ">
      <h1 className=" text-center text-white   font-bold text-2xl bg-slate-900  py-5 "> Top Courses</h1>
      <NavBar filter = {filter} setFilter = {setFilter}></NavBar>
      <Cards filter={filter}></Cards>
    </div>
  )

};

export default App;
