
       
        import React, { useState, useEffect } from "react";
        import axios from "axios";
        import "./WeatherForecast.css";
        import WeatherForcastDay from "./weatherForcastDay";
        
        export default function WeatherForecast(props) {
            const [searching, setSearching] = useState(false);
            const [weatherForecast, setWeatherForecast] = useState(null);
        
        
            function dailyForecast(response) {
                
                setWeatherForecast(response.data.daily);
                setSearching(true);
            }
        
            useEffect(()=> {
                setSearching(false)
            }, [props.coordinates])
        
        
            if (searching) {
        
                return (
        
                    <div className="weatherForecast">
                        <div className="row">
                        {weatherForecast.map (function (daily, index) {
                            if (index < 6 ) {
                          return (  <div className="col" key={index}>
                            
                     <WeatherForcastDay data={daily} /> 
                                
                            </div>
                        );
                    } else {
                    return null;}
                    })}
                        </div>
                    </div>
        );
            }
            else {
                console.log("Coordinates:", props.coordinates.long, props.coordinates.lat);
                let forecastApiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
                let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.long}&lat=${props.coordinates.lat}&key=${forecastApiKey}&units=metric`;
                axios.get(forecastApiUrl).then(dailyForecast).catch(error => console.error("Error fetching weather data: ", error));
                return null;
            }
        }