import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import ErrorFetch from './components/ErrorFetch'


function App() {

  //https://rickandmortyapi.com/api/location/3
  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [HasError, setHasError] = useState(false)
  
  useEffect(() => {
let URL

if (locationInput) {
  URL= `https://rickandmortyapi.com/api/location/${locationInput}`
}else{
  // las ubicaciones van de la 1 a la 126
  const randomIdLocation= Math.ceil(Math.random()*126) +1
   URL=`https://rickandmortyapi.com/api/location/${randomIdLocation}`
}
axios.get(URL)
.then(res=>{
  setHasError(false)
  setLocation(res.data)
  
})
.catch(err=> {
  setHasError(true)
  console.log(err)
} )
  }, [locationInput])
  
  const handleSubmit= e =>{
    e.preventDefault()
setLocationInput(e.target.inputSearch.value);
  }

  return (
    <div className="App ">
      <div className="container_img ">
        <div className="img_fondo2 animate2-bg">
        <img src="/rick-and-morty1.webp" alt="" className='img_fondo '/>
        </div>
      <img src="/Rick_and_Morty.svg" alt="" className='img_text'/>
     
      </div>
      <form onSubmit={handleSubmit} className='form_app'>
        <input id='inputSearch' type="text" placeholder='Introduce un ID desde 1 al 126' />
        <button className='button '>Search</button>
      </form>


      {
        HasError ?
        <ErrorFetch />
        :
        <>
     
      <LocationInfo location={location}/>

      <div className="residents_container">
        {
          location?.residents.map(url=>(
            <ResidentCard key={url} url={url}/>  // El url tiene un numero al final que es unico para cada uno lo cual nos sirve para key
          
          ))
        }
      </div>
      </>
       }
    </div>
  )
}

export default App
