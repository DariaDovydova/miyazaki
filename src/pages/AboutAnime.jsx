import { useParams, useNavigate } from 'react-router-dom';
import dataMovies from '../data/dataMovies';


function AboutAnime() {
  const navigate = useNavigate();
  const {title} = useParams();



  return (
    <>
    
    <div>
      {dataMovies.filter(item => item.title === title).map((item, index) => (
        
        <div key={index}>
          <h3 className='header-anime'>{item.name}</h3>
          <a className='link-anime' href={item.link} target='_blank' rel='noreferrer'>WATCH NOW</a>
          <div className='container-about'>
          <div className='blob'><img src={item.imgAbout} alt="anime" width='100%' height='100%' /></div>
          <div className='block-desc'>
          <p className='par-desc'>{item.desc}</p>
          <p>Genre: {item.genre}</p>
          <p>Original Language: {item.originalLanguage}</p>
          <p>Runtime: {item.runtime}</p>
          <button className='btn' onClick={() => navigate(-1)}>Go Back</button>
          </div>
          </div>
        </div>
        
      ))}
    </div>
    </>
  )
}

export { AboutAnime };