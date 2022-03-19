import {useState,useEffect} from 'react';

import MovieCard from './MovieCard'

// importing a css file.
import './App.css';
import SearchIcon from './search.svg';

// af5ec0c2
const API_URL = "http://www.omdbapi.com?apikey=af5ec0c2";

const movie1=
    {
    "Title": "Kick 2",
    "Year": "2015",
    "imdbID": "tt4958666",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODlhMDgwNWEtN2FmZS00NTA3LTk5ODItNjM5ODg3MjJlNGVjXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_SX300.jpg"
}



const App=()=>{

    const [movies,setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');

    const searchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`)
        const data=await response.json();

        setMovies(data.Search);
    }

useEffect(()=>{
    searchMovies('kick')
},[]);

    return (
        <div className='app'>
            <h1>Movie Land</h1>

            <dir className="search">
                <input placeholder='Search for Movies'
                value={searchTerm}
                onChange={ (e)=>setSearchTerm(e.target.value)}/>
                <img src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}/>
            </dir>


            {/* here we are having a dynamic block of code. */}
            {

                movies?.length>0
                ?(
                     <div className='container'>

                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                         
                    </div>
                ):
                (
                    <div className='empty'>
                        <h2>No  Movies found</h2>
                        </div>
                )
            }

           
        </div>
    );
}

export default App;