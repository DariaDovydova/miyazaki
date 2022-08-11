import { useDispatch } from "react-redux";
import { removeItemFromFav } from "../redux/favoritesSlice";
import dataMovies from "../data/dataMovies";


function FavoritesItem({favoritesItem}) {
  const movies = dataMovies.find(item => item.id === favoritesItem.movieId);
    const dispatch = useDispatch();

  return (
    <div>
      <h4>{movies.name}
      <span onClick={() => dispatch(removeItemFromFav({favoritesItemId: favoritesItem.id}))}>
            <img className="icon-delete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete"/>
      </span>
      </h4>
      <div className="block-favAnime">
      <img className="img-cart" src={movies.img} alt="movie" width='200px' height='200px' />     
      <a className="link-watch-favAnime" href={movies.link} target='_blank' rel='noreferrer'>WATCH NOW</a>
      </div>
    </div>
    
  )
  
}

export { FavoritesItem };