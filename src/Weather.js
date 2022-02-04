import React from "react";


import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
            <input className="user-input" type="search" placeholder="Enter a city..." />
            <input className="search-button" type="submit" value="Search" />
        </form>
        <div class="weather-display">
            <ul>
                <li className="current-city">Toronto</li>
                <li>Thursday 21:10</li>
                <li>Snowing</li>
            </ul>
            <ul>
                <li></li>
                <li>Humidity: 80%</li>
                <li>Wind: 5m/s</li>
            </ul>
            <ul>
                <li className="current-temp">-1°C</li>
            </ul>
        </div>
    </div>
    )
}