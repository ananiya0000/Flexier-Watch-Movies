import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

function Card({brand,keys,mtitle,description}) {
  
  const brands='https://image.tmdb.org/t/p/w500'+brand
  
  
  return (
    <div className='card'>
        <div className='container'>
            <Link to={'/watch'} state={{id:keys,ttitle:mtitle,overview:description,srcimg:brands}}> <img key={keys} src={brands} alt='not loaded'/></Link>
        </div>
    </div>
  )
}

export default Card