import React, { useState } from "react";

import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
    let [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return props.celsiusTemp * 9 /5 + 32;
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <span className="current-temp">{Math.round(props.celsiusTemp)}<span className="units">°C | <a href="/" onClick={showFahrenheit}>°F</a></span></span>
            </div>
        ) 
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="current-temp">{Math.round(fahrenheit())}<span className="units"><a href="/" onClick={showCelsius}>°C </a> | °F</span></span>
            </div>
        )
    }

}