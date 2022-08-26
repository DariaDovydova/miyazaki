import dataMovies from '../data/dataMovies';
import { useState } from "react";
import { Movie } from './Movie';

const MovieList = () => {
  const [mySearch, setMySearch] = useState('');

  return (
    <>
      <div className='row'> 
      <div className="input-field col s12">
        
          <input
          type="search"
          id="search-field"
          placeholder="Search..."
          onChange={(e) => setMySearch(e.target.value)}
          />
        </div>
    </div>
    <div className='list'>
    
      {dataMovies
      // eslint-disable-next-line
      .filter((movie)  => {
        if (mySearch === '') {
          return movie;
        } else if (movie.name.toLowerCase().includes(mySearch.toLowerCase())) {
          return movie;
        }
      }).map((movie, index) => <Movie key={index} movie={movie} />)}
    </div>
    </>
  )
}

export { MovieList };