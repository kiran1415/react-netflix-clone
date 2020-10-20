import React ,{useEffect, useState} from 'react'
import axios from './axios';
import './Row.css';
const BaseUrl="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}) {

   const [Movies, setMovies] = useState([]);
  
   useEffect(()=>{
       //IF [] , runs only once
      async function fetchData(){
          
          const request=await axios.get(fetchUrl);
         
          setMovies(request.data.results);
          return request;

      }
      fetchData();
   
   },[fetchUrl]);

  



    return (
       

            <div className="row">
                <h2>{title}</h2>
                <div className="row__posters">
                    {Movies.map((movie) =>(

                        <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge" }`}
                        src={`${BaseUrl}${ isLargeRow? movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name}
                        />
                    ))}
                </div>
            </div>
           
            
            
       
    );
}

export default Row
