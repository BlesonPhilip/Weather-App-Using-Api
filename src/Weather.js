import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar';
import Foot from './components/Foot';

export default function Weather() {
  const [city,setCity] = useState();
  const  [weather,setWeather] =useState();

  const handleCityChange =(event) => {
     setCity(event.target.value)
  }
const fetchWeather =async () => {
    try{
const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'72f907a9a33b93c3b595fa3260960337'}`)
   setWeather(response);
    }
    catch(error)
    {
      console.log('Error fetching weather data',error)
    }
} 
console.log(weather,'weather')
const handleClick = () => {
    fetchWeather();
}
  return (
    <div>
      <NavBar></NavBar>
    <div className='weather-container'>
       
    <input type ='text' placeholder='Enter City Name' value={city} onChange={handleCityChange}/><br></br>
    <button onClick={handleClick}>Get Weather</button>
    {weather && (<>
    <div className='weather-info'>
      <h3>{weather.data.name}</h3>
      <p>Temp is {weather.data.main.temp}</p>
      <p>Wind is {weather.data.wind.speed}</p>
      <p>{weather.data.weather[0].description}</p>
    </div>
    </>)}
   </div>
  
   <Foot></Foot> 
    </div>
  )
}

