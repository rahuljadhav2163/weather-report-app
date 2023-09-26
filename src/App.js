import "./App.css";
import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./component/Card"
import Card from "./component/Card";
import Wind from "./wind.png"
import obs from "./observation.png"
import humidity from "./humidity.png"


export default function App() {

  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('Pune')


  async function loadWeatherData() {

    let data = ""

    try{
      data= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db37138b8bb5b173c89f46518dfd2de6`)

    }
    catch(error){
      console.log(error);
    }

    
    setWeatherData(data.data);
  }



  useEffect(() => {
    loadWeatherData();
  }, [])

  useEffect(() => {
    loadWeatherData();
  }, [city]);

  return (
    <div>
      <div className="top-container">
        <p className="app-heading">Tempees.com</p>
        <input className="input-search" type="text" placeholder="Search your city 🔍" value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>

      <p className="slogen-line">"Weather, Wherever, Whenever."</p>

      <div className="card-container">

        <div>
          <p className="weather-city">City: {city} </p>

          <p className="temp-text">Temperature</p>
          <p className="current-temp">{((weatherData?.main?.temp) - 273).toFixed(2)} °C</p>
        </div>

        <div> <Card head={'Wind'} Img={Wind} report={(weatherData?.wind?.speed)} unit="km/h"/> </div>

        <div><Card head={'Visibility'} Img={obs} report={(weatherData?.visibility)} unit="Mtr" /></div>

        <div><Card head={'Humidity'} Img={humidity} report={(weatherData?.main?.humidity)} unit="°F"/></div>

      </div>
    </div>
  )
}
