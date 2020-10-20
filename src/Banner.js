import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './request';
import './Banner.css'
function Banner() {

    const [Movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request=await axios.get(requests.fetchNetflixOriginal);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            );  
            return request;         
        }
        fetchData();
        
    }, [])
    console.log(Movie)

  function truncate(str,n) {
      return str?.length>n?str.substr(0,n-1)+"...":str;
      
  }



    return (
       <header className="banner" 
       style={{
           backgroundSize:"cover",
           backgroundImage:`url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
           backgroundPosition:"center center",
       }}
       >{/* backgroud-image */}
               <div className="banner_contents">
    <h1 className='banner_title'>{Movie?.title || Movie?.name || Movie?.original_name}</h1>
         <div className="banner__buttons">
            <button className="banner_button">Play</button>  
            <button className="banner_button">My List</button>  
         </div>  
    <h1 className="banner_decription">{truncate(Movie?.overview,150)}</h1>     
              
     </div>

     <div className="banner__fadeButton"/>

       </header>
    )
}

export default Banner
