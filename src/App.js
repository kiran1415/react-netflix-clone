import React from 'react';
import './App.css';
import Row from './Row'
import  requests from './request';
import Banner from './Banner';
import Nav from  "./Nav"
function App() {
  return (
    <div className="App">
    {/* Navbar work */}
    <Nav/>
    {/* Banner  */}
    <Banner/>


      


      <Row isLargeRow  title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTreanding} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Best Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
   
   
   
   
   
    </div>
  );
}

export default App;
