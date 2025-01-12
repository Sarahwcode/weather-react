import React from "react";
import DateFormat from "./DateFormat";
import WeatherUnit from "./WeatherUnit";


export default function WeatherInfo(props)
{
    return (
      
        <div >
          <ul >
        
            <div className="row m-2 date-time ">
            <li className="col-12 col-md-6  ">
              <DateFormat date = {props.data.time}/>
            </li>
        
    
            <li className="col-12 col-md-6  icon" ><img src={props.data.iconURL} alt="Weather Icon" />  </li>
            </div>
        </ul>
        <WeatherUnit metric= {props.data.temperature}/>
      <div className="temp-city">
      <h2>{props.data.city}</h2></div>   
        <ul >
            <div className="row  ">
            <li className="col-12 col-md-4 ">
                <span className="names-conditions ">Description: </span> {props.data.description}
            </li>
            <li className="col-12 col-md-4 ">
              <span className="names-conditions" >Humidity:</span> {props.data.humidity}%
            </li>
            <li className="col-12 col-md-4  ">
              <span className="names-conditions" >Wind speed:</span> {props.data.wind}mph
            </li>
            </div>
        </ul>
     
      
                </div>

            
            );
    
}