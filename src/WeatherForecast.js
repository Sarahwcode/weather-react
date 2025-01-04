import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast (props){
return (
    <div className="weatherForecast">
<div className="row">
<div className="col">
<div>
    Sat
</div>
<div>
<img src={props.data.iconURL} alt="Weather Icon" />  
</div>
<div>
    <span>10°</span><span>5°</span>
</div>
</div>
</div>

    </div>
)
}