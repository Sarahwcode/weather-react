import React from "react";
import DateFormat from "./DateFormat";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props)
{
    return (
      
        <div >
          <ul >
        
            <div className="row m-5 date-time">
            <li className="col-4 ">
              <DateFormat date = {props.data.time}/>
            </li>
        
            <li className="col-4">
              
            </li>
            <li className="col-4 icon" ><img src={props.data.iconURL} alt="Weather Icon" />  </li>
            </div>
        </ul>
               
        <ul >
            <div className="row m-5 pt-0 ">
            <li className="col-3">
                Description: {props.data.description}
            </li>
            <li className="col-3 ">
              Humidity: {props.data.humidity}%
            </li>
            <li className="col-3 ">
                Wind speed: {props.data.wind}mph
            </li>
            </div>
        </ul>
      <WeatherUnit metric= {props.data.temperature}/>
      <div className="temp-city">
      <h2>{props.data.city}</h2></div>
                </div>
            
            );
    
}