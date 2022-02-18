import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

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
                            <WeatherIcon code={props.data.iconCode} size={56} />
                            <span className="current-temp">{Math.round(props.data.temperature)}<span className="units">°C</span></span>
                        </div>
                    </div>
                    <div className="col-2">
                        <ul className="weather-details">
                            <li className="text-capitalize lh-base fs-6">{props.data.description}</li>
                            <li>Humidity: <span className="fw-bold">{props.data.humidity}%</span></li>
                            <li>Wind: <span className="fw-bold">{Math.round(props.data.wind)} mph</span></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}