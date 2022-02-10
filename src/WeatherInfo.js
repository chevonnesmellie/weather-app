import React from 'react';
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                    <h1>{props.data.name}</h1>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul className="weather-date">
                            <li><FormattedDate date={props.data.date} /></li>
                         </ul>
                    </div>
                    <div className="col-4">
                        <div className="weather-temperature">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt={props.data.description} className="weather-img" />
                            <span className="current-temp">{Math.round(props.data.temperature)}<span className="units">°C | °F</span></span>
                        </div>
                    </div>
                    <div className="col-2">
                        <ul className="weather-details">
                            <li class="text-capitalize">{props.data.description}</li>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)} mph</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}