import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from './Spinner.jsx';
import useGif from '../hooks/useGif.js';


 const API_KEY=import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function Random() {
 
  const {loading,gif,fetchdata}=useGif();
  

    function clickHandler(params) {
      fetchdata();
    
  }
  return (
    <div className='w-1/2   bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
    <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random Gif</h1>
    {loading?(<Spinner></Spinner>) :(<img src={gif} ></img>)}
    <button onClick={clickHandler} className='w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-600 transition-all duration-200'> Generate</button>
      
    </div>
  )
}

export default Random;
 