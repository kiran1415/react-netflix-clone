import React ,{useEffect, useState} from 'react'
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
import movieTrailer from "movie-trailer";

const BaseUrl="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}) {

   const [Movies, setMovies] = useState([]);
   const [tarilerUrl, settarilerUrl] = useState("");
  
   useEffect(()=>{
       //IF [] , runs only once
      async function fetchData(){
          
          const request=await axios.get(fetchUrl);
         
          setMovies(request.data.results);
          return request;

      }
      fetchData();
   
   },[fetchUrl]);

   const opts={
       height:"390",
       width:"100%",
       playerVars:{
           autoplay:1,
       },
   };
   const handleClick=(movie)=>{
       if(tarilerUrl){
           settarilerUrl('');
       }
       else{
           movieTrailer(movie?.name || "")
           .then(url=>{
               const urlParams = new URLSearchParams(new URL(url).search);
               settarilerUrl(urlParams.get("v"));

           }) .catch((error)=> console.log(error));
       }
   };

  



    return (
       

            <div className="row">
                <h2>{title}</h2>
                <div className="row__posters">
                    {Movies.map((movie) =>(

                        <img 
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge" }`}
                        src={`${BaseUrl}${ isLargeRow? movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name}
                        />
                    ))}
                </div>

                    {tarilerUrl && <YouTube videoId={tarilerUrl} opts={opts}/> }
            </div>
           
            
            
       
    );
}

export default Row
