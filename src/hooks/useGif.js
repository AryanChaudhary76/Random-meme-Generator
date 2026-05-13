import React, { useEffect, useState } from 'react'
import axios from "axios";

  const API_KEY=import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
   
  const [loading,setloading]=useState(false);
    
    const [gif,setgif]=useState();  
  
     const tagurl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
   const randomurl =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`; 

  
  async function fetchdata(tag) {
    setloading(true)
    
    const {data}= await  axios.get( tag? tagurl:randomurl);
    const imageSource=data.data.images.downsized_large.url;
    console.log(imageSource);
    
    setgif(imageSource);
    setloading(false);  
  }
  useEffect(function(){
    fetchdata();
  },[]);
  return {gif,loading,fetchdata}
}




export default useGif;
 