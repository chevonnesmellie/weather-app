import React from 'react';
import WeatherIcon from './WeatherIcon';

import "./DailyForecast.css";

export default function DailyForecast() {
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