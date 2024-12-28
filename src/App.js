

import './App.css';



export default function App() {   
  let weatherData = {
    city: "London",
    day: "Saturday",
    hour: "14",
    minutes: "32",
    temprature: "14",
    condition: "Moderate Rain",
    humidity: "87",
    wind: "7.2",
  };
  return (
    <div className="App">
      <section>
        <header>
          <form>
            <input
              className="search"
              type="search"
              placeholder="Enter a city.."
              required
            />
            <input className="submit" type="submit" value="Search" />
          </form>
        </header>
        <hr />
        <main>
          <div className="current-weather">
            <div>
              <h1>{weatherData.city}</h1>
              <p className="first-para">
                <span>{weatherData.day}</span> <span>{weatherData.hour}</span>:
                <span>{weatherData.minutes}</span>, {weatherData.condition}{" "}
                <br />
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind}km/h</strong>
              </p>
            </div>
            <div className="temprature">{weatherData.temprature}°C</div>
          </div>
        </main>
        <hr />
        <footer>
          <p>
            This project was coded by
          
              Sarah Ward
            {" "}
            and is
            <a href="https://github.com/Sarahwcode/weather-react" target="_blank" rel="noreferrer">
              {" "}
              on GitHub
            </a>{" "}
            and
           
              hosted on Netlify
          
          </p>
        </footer>
      </section>
    </div>
  );
}

  


    

    
    
 
 
