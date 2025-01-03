import React, {useState} from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";


import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.city);

function handleResponse(response){
   
setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    wind: response.data.wind.speed,
    humidity: response.data.temperature.humidity,
    city: response.data.city,
    description: response.data.condition.description,
iconURL:  response.data.condition.icon_url,
    time: new Date(response.data.time * 1000)
});

}



function handleSubmit (event){
event.preventDefault();
search();
}

function handleCityChange (event){
setCity(event.target.value);
}
function search (){
    const apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
if(weatherData.ready) {

    return (
       <div className="outside-body">
        <div className="Weather">

            <form className="search" onSubmit={handleSubmit} > 
                <input className="input-form" type="text" placeholder="Enter a city..." autoFocus="on" onChange={handleCityChange}></input>
                <input type="submit" className="button"></input>
            </form>
      < WeatherInfo data= {weatherData}/>
   
    
        </div>
        </div>
    );
}  else {
search()

return "Loading...";
} }
