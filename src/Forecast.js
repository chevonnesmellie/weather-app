import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForecastDay from './ForecastDay';

import "./Forecast.css";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleForecastResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">
                    {forecastData.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        )
    } else {
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        const apiKey = "35edd9e7e8e2b546aad3ee8914df1a70";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecastResponse);

        return "Loading...";
    }
}