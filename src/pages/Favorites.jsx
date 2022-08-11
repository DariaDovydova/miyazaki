import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FavoritesItem } from "../components/FavoritesItem";
import { getFavoritesItems } from "../redux/favoritesSlice";


function Favorites() {
  const favItems = useSelector(getFavoritesItems);
  const navigate = useNavigate();

  return (
    <div> 
            {favItems.length < 1 ? <p className="par-fav">You haven't added any anime yet...</p> : favItems.map((favoritesItem, index) => <FavoritesItem key={index} favoritesItem={favoritesItem}/>)}
            <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export { Favorites };