import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay (props){



    function dayOfWeek () {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[day];
    }
    return (
        <div>
<div>
{dayOfWeek()}
</div>
<div>
<img src={props.data.condition.icon_url} alt="weather Icon"/>
</div>
<div>
    <span>{Math.round(props.data.temperature.maximum)}°</span> <span className="miniTemp">{Math.round(props.data.temperature.minimum)}°</span>
</div>

</div>

    );
}