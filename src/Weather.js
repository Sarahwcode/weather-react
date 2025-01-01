import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

import "./Weather.css";
export default function Weather() {
    return (
       <div className="outside-body">
        <div className="Weather">

            <form className="search"  > 
                <input className="input-form" type="text" placeholder="Enter a city..."></input>
                <input type="submit" className="button"></input>
            </form>
        <FontAwesomeIcon  icon={faCloud} />
    
        <ul >
    <div className="row">
    <li className="col-6">
        Saturday    December 29th 2024
    </li>

    <li className="col-6">
        14:05
    </li>
    </div>
</ul>
       
<ul >
    <div className="row">
    <li className="col-3">
        Description: Stormy with Clouds
    </li>
    <li className="col-3">
      Humidity
    </li>
    <li className="col-3">
        Wind speed
    </li>
    </div>
</ul>
<h1>18°C</h1>
        <h2>London</h2>
        </div>
        </div>
    );
}