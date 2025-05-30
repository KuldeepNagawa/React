import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
         city: "Indore",
        feelsLike: 35.35,
        humidity: 38,
        temp: 34.25,
        tempMax: 34.25,
        tempMin: 34.25,
        weather: "broken clouds",
    });

    let updateInfo = (newInfo) => {
        return setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h3>Weather App</h3>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}