import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner.jsx';
import useGif from '../hooks/useGif.js';




function Tag() {
  const API_KEY=import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
  
  const [tag,setTag]=useState('');
  
 
  
  const {gif,loading,fetchdata}=useGif(tag);;

    function clickHandler(params) {
      fetchdata(tag);
    
  }
  function changehandler(){
    setTag(event.target.value);

  }
  return (
    <div className='w-1/2   bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[15px]'>
    <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag}  Gif</h1>
    {loading?(<Spinner></Spinner>) :(<img src={gif} ></img>)}
    <input value={tag} onChange={changehandler} className='w-10/12 mb-[3px] py-2 bg-white rounded-md text-center'></input>
    <button onClick={clickHandler} className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-600 transition-all duration-200'> Generate</button>
      
    </div>
  )
}

export default Tag;
 