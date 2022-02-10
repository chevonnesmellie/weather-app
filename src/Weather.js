import React, { useState } from "react";
import axios from "axios";
import { Puff } from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";


import "./Weather.css";

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);

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

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        const apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return ( 
            <div className="Weather">
                 <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input className="form-control" onChange={handleCityChange} type="search" placeholder="Enter a city..." autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input className="btn w-100 search-button" type="submit" value="Search" />
                        </div>
                    </div>
                </form>
               <WeatherInfo data={weatherData}/> 
            </div>
        )    
    } else {
        search();
        return (
            <div className="Weather">
                <div>
                    <Puff color='navy' height="100" width="100" ariaLabel="loading" />
                </div>
            </div>
        );
    }
}