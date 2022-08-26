import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItemToFavorites } from "../redux/favoritesSlice";

const Movie = ({movie}) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false)




  return (
    <div className="card">
      <Link to={`/about/${movie.title}`}>
    <div className="card-image">
    <img className='img-catalog' src={movie.img} alt="movie" />
    </div>
      </Link>
    <div className="card-content">
      <span className="card-title">{movie.name}</span>
    </div>
    <div className="card-action">
      <button className='btn'  onClick={() => {dispatch(addItemToFavorites({movie}, setAdd(true)))}}>{add ? 'Added' : 'Add to favorites'}</button>
    </div>
    </div>
  )
}

export { Movie };