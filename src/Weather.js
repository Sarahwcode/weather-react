import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

import "./Weather.css";

export default function Weather() {

const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response){
    
setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    wind: response.data.wind.speed,
    humidity: response.data.temperature.humidity,
    city: response.data.city,
    description: response.data.condition.description,
    iconURL:  "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
});

}
if(weatherData.ready) {

    return (
       <div className="outside-body">
        <div className="Weather">

            <form className="search"  > 
                <input className="input-form" type="text" placeholder="Enter a city..."></input>
                <input type="submit" className="button"></input>
            </form>
       
    
        <ul >
    <div className="row m-5 date-time">
    <li className="col-4 ">
        Saturday, December 29th 2024
    </li>

    <li className="col-4">
        14:05
    </li>
    <li className="col-4 icon" > <FontAwesomeIcon  icon={faCloud} /></li>
    </div>
</ul>
       
<ul >
    <div className="row m-5 pt-0 ">
    <li className="col-3">
        Description: {weatherData.description}
    </li>
    <li className="col-3 ">
      Humidity: {weatherData.humidity}%
    </li>
    <li className="col-3 ">
        Wind speed: {weatherData.wind}mph
    </li>
    </div>
</ul>
<div className="temp-city">
<h1>{Math.round(weatherData.temperature)}<span> °C</span></h1>
        <h2>{weatherData.city}</h2>
        </div>
        </div>
        </div>
    );
}  else {


const apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
let city = "London"; 
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
return "Loading...";
} }
