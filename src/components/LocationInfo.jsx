import React from 'react'
import './styles/locationInfo.css'
const LocationInfo = ({location}) => {
    
  return (
    <div className="container_location">
<article className='card_location animate-bg'>
    <p><span>Location:</span> {location?.name}</p> 
        <p><span>Type:</span> {location?.type}</p>
        <p><span>Dimension:</span> {location?.dimension}</p>
        <p><span>Population:</span> {location?.residents.length}</p>
</article>
</div>
  )
}

export default LocationInfo