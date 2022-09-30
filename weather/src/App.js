import React, { useState, useEffect } from 'react';
import coldBg from './assets/cold.jpg';
import hotBg from './assets/hot.jpg';
import Description from './components/descriptions';
import {getFormattedWeatherData} from './weatherservice';

function App() {

  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    try{
      const fetchweatherdata = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      setLoading(false);
      console.log(data)

      // dynamic bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    }

    fetchweatherdata();
  } catch(e) {
    console.log(e);
    setLoading(false);
  }
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

   const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  if(loading) return <h6 className="loading-status">Loading... </h6>

  return(
    <div className="app" style={{ backgroundImage: `url( ${bg} )`}}>
     <div className="overlay">

      { weather && (
      <div className="container">
        <div className="section section__inputs">
          
          <input 
              type='text' 
              name={city} 
              className='input'
              placeholder='Enter city...' 
              onKeyDown={enterKeyPressed}/>
          
          <button onClick={(e) => handleUnitsClick(e)}> °F </button>
        </div>

        <div className="section section__temperature">
          <div className="icon">
            <h3> {`${weather.name}, ${weather.country}`} </h3>
            <img src= {weather.iconURL} 
                 alt="weatherimage"/>

            <h3> {weather.description} </h3>
          </div>

          <div className="temperature">
            <h3> {weather.temp.toFixed()}° 
            {units === "metric" ? "C" : "F"} </h3>
          </div>
        </div>

        <Description weather={weather}/>
      </div>
      )}

     </div>

    </div>)
}

export default App;

