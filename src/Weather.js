import React from "react";


import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input className="w-100" type="search" placeholder="Enter a city..." autoFocus="on" />
                </div>
                <div className="col-3">
                    <input className="btn w-100 search-button" type="submit" value="Search" />
                </div>
            </div>
        </form>
            <div className="row">
                <h1>Toronto</h1>
            </div>
            <div className="row">
                <div className="col-7">
                    <ul className="weather-date">
                        <li>Monday 18:45</li>
                    </ul>
                </div>
                <div className="col-3">
                    <div className="weather-temperature">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy icon" className="weather-img" />
                        <span className="current-temp">0<span className="units">°C | °F</span></span>
                    </div>
                </div>
                <div className="col-2">
                    <ul className="weather-details">
                        <li>Cloudy</li>
                        <li>Humidity: 79%</li>
                        <li>Wind: 16 km/h</li>
                    </ul>
                </div>
            </div>
    </div>
    )
}