
import { useEffect, useState } from 'react';
import './App.css';
import {getMovieList, searchMovie} from "./api"

const App = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(()=>{
    getMovieList().then((result)=>{
      setPopularMovies(result)
    })
  }, [])
  const search = (q) => {
    console.log({q})
  }

  console.log({popularMovies: popularMovies})

  return (
    <div className="App">
      <header className="App-header">
        <h1>UCUP MOVIE MANIA</h1>
          <input type="text" placeholder='Cari film kesayangan...' className='Movie-search' onChange={({target})=> search(target.value)}/>
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh Pertama</div>
            <img className="Movie-image" src=''></img>
            <div className="Movie-date">11-12-2022</div>
            <div className="Movie-rate">9,9</div>
          </div>
        </div>
      
      </header>
    </div>
  );
}

export default App;
