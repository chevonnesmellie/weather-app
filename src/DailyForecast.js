import React from 'react';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';

import "./DailyForecast.css";

export default function DailyForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    const apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return (
        <div className="DailyForecast">
            <div className="row">
                <div className="col">
                    <div className="DailyForecast-day">Mon</div>
                    <WeatherIcon code="01d" size={40} />
                    <div className="DailyForecast-temp">
                       <span className="DailyForecast-maxtemp">19°</span>
                       <span className="DailyForecast-mintemp">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}