import React, {useState} from "react";


export default function WeatherUnit (props){
    const [unit, setUnit] = useState("metric");

    function Fahrenheit(event) {
        event.preventDefault();
        setUnit("Imperial");
       
      }
      function displayCelsius(event) {
        event.preventDefault();
        setUnit("metric");
      
      }

      function fahrenheitChange () 
      { return (props.metric * 9 / 5) + 32;}
     
    if (unit === "metric") {
   return ( <div className="temp-city" >
        <h1>{Math.round(props.metric)}<span>°C| <a href="/" onClick={Fahrenheit}>°F</a></span></h1>
               
                </div>);}
         
                else {
                    return ( <div className="temp-city" >
                        <h1>{Math.round(fahrenheitChange())}<span> <a href="/" onClick={displayCelsius}>°C</a>|°F</span></h1>
                           
                                </div>);}
                
}

