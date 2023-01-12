import React, { useEffect, useState } from 'react'
import style from "./style.css"
import TemInfo from './temInfo'

const Temprature = () => {
    const [userSearch, setUserSearch] = useState("pune")
    const [data, setData] = useState({})

    const getApidata = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q= ${userSearch}&units=metric&appid=d1e3b62fa96068edc569be14266d3b9b`
            const response = await fetch(url)
            const data = await response.json()

            const { temp, humidity, pressure } = data.main;
            const { sunset, country } = data.sys
            const { speed } = data.wind
            const { main: weather } = data.weather[0]
            const { name } = data

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                sunset,
                speed,
                weather,
                name,
                country
            }

            setData(myNewWeatherInfo)

        } catch (error) {
            console.log(error.message)
        }

    }

    console.log(data.speed)
    useEffect(() => {
        getApidata()
    }, [])
    return (
        <>
            <div className='parent-Container' style={{ textAlign: "center", margin: " 50px auto" }}>
                <h1>weather App</h1>
                <div className="serach_Container">
                    <input type="text" placeholder="serach..." className='serach' onChange={(e) => setUserSearch(e.target.value)} />
                    <button type="serach" className='serachbtn' onClick={getApidata}>serach</button>
                </div>
                <TemInfo data={data} />
            </div>

        </>
    )
}

export default Temprature