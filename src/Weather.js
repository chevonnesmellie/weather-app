import React from "react";


import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
            <input className="user-input" type="search" placeholder="Enter a city..." />
            <input className="search-button btn btn-primary" type="submit" value="Search" />
        </form>
            <div className="row">
                <div className="col-6">
                    <h1>Toronto</h1>
                    <ul>
                        <li>Monday 18:45</li>
                        <li>Cloudy</li>
                    </ul>
                </div>
                <div className="col-3">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Weather icon"/>
                    <span className="current-temp">0°C</span>
                </div>
                <div className="col-3">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 79%</li>
                        <li>Wind: 16 km/h</li>
                    </ul>
                </div>
            </div>
    </div>
    )
}