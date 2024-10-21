import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Kodaikanal",
        feelsLike: 41.05,
        humidity: 40,
        temp: 14.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze"

    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}