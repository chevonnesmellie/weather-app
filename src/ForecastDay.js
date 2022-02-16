import React from 'react';
import WeatherIcon from './WeatherIcon';

import "./ForecastDay.css";

export default function ForecastDay(props) {
    return (
        <div className="ForecastDay">
            <div className="DailyForecast-day">Mon</div>
                <WeatherIcon code="01d" size={40} />
                <div className="DailyForecast-temp">
                    <span className="DailyForecast-maxtemp">19</span>
                    <span className="DailyForecast-mintemp">10°</span>
                </div>
        </div>
    )
}