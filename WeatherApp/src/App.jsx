import { useState } from 'react'
import './App.css'
import SearchBar from './pages/SearchBar'
import axios from 'axios'
import WeatherCard from './pages/WeatherCard'

function App() {
  const [weather, setWeather]=useState(null)
  const [loading, setLoading]=useState(null)
  const [err, setErr]=useState(null)

  const fetchweather = async (city) => {
    setLoading(true);
    setErr(null);
    try {
      const API_KEY = "861d8a303db33a2d5affc12dff0037e8"; // Your actual API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (er) {
      setErr("City not found or API error",er);
      setWeather(null);
    }
    setLoading(false);
  };
  
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
        <h1 className='text-3x1 font-bold mb-4'>Weather Dashboard</h1>
        <SearchBar fetchweather={fetchweather} />
        {loading ? <p>Loading...</p> : null}
        {err ? <p className='text-red-500 mt-5'>{err}</p> : null}
        {weather && <WeatherCard weather={weather}/>}
      </div>
    </>
  )
}

export default App
