import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../icon.png';
import { useSelector } from "react-redux";
import { getFavoritesItems } from "../redux/favoritesSlice";

function Header() {

  const animeList = useSelector(getFavoritesItems)
  return (
    <nav className="header"> 
    <div className="nav-wrapper">
        <Link to="/">
          <img className='icon-hayao' src={Icon} alt="icon" />
        </Link>
        <ul id="nav-mobile" className="right">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites {animeList.length > 0 ? <span className='quantity'>{animeList.length}</span> : null}</Link>
            </li>
        </ul>
    </div>
</nav>
  )
}

export { Header };