import React from 'react';
import WeatherIcon from './WeatherIcon';

import "./ForecastDay.css";

export default function ForecastDay(props) {
    function maxTemperature() {
        return Math.round(props.data.temp.max);
    }

    function minTemperature() {
        return Math.round(props.data.temp.min);
    }

    function formattedDay() {
        let date = new Date(props.data.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = date.getDay();

        return days[day];
    }

    return (
        <div className="ForecastDay">
            <div className="DailyForecast-day">{formattedDay()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={40} />
                <div className="DailyForecast-temp">
                    <span className="DailyForecast-maxtemp">{maxTemperature()}°</span>
                    <span className="DailyForecast-mintemp">{minTemperature()}°</span>
                </div>
        </div>
    )
}