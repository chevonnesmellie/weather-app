import React from "react";
import bootstrap from "bootstrap";

import "./Weather.css";

export default function Weather() {
    return ( 
    <div className="Weather">
        <form>
            <input type="search" placeholder="Enter a city..." />
            <input type="submit" value="Search" />
        </form>
        <ul>
            <li>Toronto</li>
            <li>Thursday 21:10</li>
            <li>Snowing</li>
        </ul>
    </div>
    )
}