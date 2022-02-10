import React, { useState } from "react";
import axios from "axios";
import { Puff } from 'react-loader-spinner';
import FormattedDate from "./FormattedDate";


import "./Weather.css";

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true, 
            date: new Date(response.data.dt * 1000), 
            name: response.data.name, 
            temperature: response.data.main.temp, 
            description: response.data.weather[0].description, 
            humidity: response.data.main.humidity, 
            wind: response.data.wind.speed, 
            icon: response.data.weather[0].icon});
    }

    if (weatherData.ready) {
        return ( 
            <div className="Weather">
                 <form>
                    <div className="row">
                        <div className="col-9">
                            <input className="w-100" type="search" placeholder="Enter a city..." />
                        </div>
                        <div className="col-3">
                            <input className="btn w-100 search-button" type="submit" value="Search" />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <h1>{weatherData.name}</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul className="weather-date">
                            <li><FormattedDate date={weatherData.date} /></li>
                         </ul>
                    </div>
                    <div className="col-4">
                        <div className="weather-temperature">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt={weatherData.description} className="weather-img" />
                            <span className="current-temp">{Math.round(weatherData.temperature)}<span className="units">°C | °F</span></span>
                        </div>
                    </div>
                    <div className="col-2">
                        <ul className="weather-details">
                            <li class="text-capitalize">{weatherData.description}</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )    
    } else {
        const apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return (
            <div className="Weather">
                <div>
                    <Puff color='navy' height="100" width="100" ariaLabel="loading" />
                </div>
            </div>
        );
    }
}