import React, { useState, useEffect } from 'react'

const TemInfo = ({ data }) => {
    const {
        temp,
        humidity,
        pressure,
        sunset,
        speed,
        weather,
        name,
        country
    } = data

    const [weatherState, setWeatherState] = useState("")

    useEffect(() => {
        if (weather) {
            switch (weather) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weather]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <div>  <div className="temp_Container">
            {/* icon */}
            <div className='icon_container'>
                <i className={`wi ${weatherState} weatherState`}></i>
            </div>
            <div className="dispaly_temp">
                <div className='display_temp'>
                    <div className="info">
                        <h1><span>{temp}&deg;</span></h1>
                        <div className="subinfo" style={{ marginLeft: "35px" }}>
                            <h6>{weather}</h6>
                            <p>{name},{country}</p>
                        </div>
                    </div>
                </div>
                <div className='time' style={{ width: "50%", textAlign: "center" }}>
                    <p>{new Date().toLocaleDateString()}</p>
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
            </div>
            <div className="temp_info">
                <div className="combo_info">
                    <p className="extra-info-leftside"><i className={"wi wi-sunset"}></i>
                        {timeStr} PM <br />
                        <b>Sunset</b>
                    </p>
                </div>
                <div className="combo_info">
                    <p><i className={"wi wi-humidity"}></i></p>
                    <p>{humidity} <br />
                        <b>humidity</b>
                    </p>
                </div>
                <div className="combo_info">
                    <p>  <i className={"wi wi-rain"}></i></p>
                    <p>{pressure}<br />
                        <b>pressure</b>
                    </p>
                </div>
                <div className="combo_info">
                    <p><i className={"wi wi-strong-wind"}></i></p>
                    <p>{speed}<br />
                        <b>speed</b>
                    </p>
                </div>
            </div>
        </div></div>
    )
}

export default TemInfo