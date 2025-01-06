import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast (props){
   const [searching, setSearching] = useState (false);
const [weatherForecast, setWeatherForecast] = useState(null);


    function dailyForecast(response) {
setWeatherForecast(response.data.daily);
setSearching(true);
 }
 



  if (searching){
return (
 
    <div className="weatherForecast">
<div className="row">
<div className="col">
<div>
{weatherForecast[0].time}
</div>
<div>
{weatherForecast[0].time}
</div>
<div>
    <span>{weatherForecast[0].temperature.maximum}</span><span>{weatherForecast[0].temperature.minimum}</span>
</div>
</div>
</div>

    </div>
   );}
   else {
   
    let forecastApiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.long}&lat=${props.coordinates.lat}&key=${forecastApiKey}&units=metric`;
axios.get(forecastApiUrl).then(dailyForecast);
   return null;
   }
        }
       
 
