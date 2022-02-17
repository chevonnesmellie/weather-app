import React, { useState } from "react";

import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
        return (
            <div className="WeatherTemperature">
                <span className="current-temp">{Math.round(props.celsiusTemp)}<span className="units">°C</span></span>
            </div>
        );
}