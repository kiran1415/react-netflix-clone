const API_KEY="a2ff1ec1796af531a1624e1670318dd4";



const requests={


fetchTreanding:`/trending/all/week?api_key=${API_KEY}&languages=en-US`,
fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
fetchActionMovies=`/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies=`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies=`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies=`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries=`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests