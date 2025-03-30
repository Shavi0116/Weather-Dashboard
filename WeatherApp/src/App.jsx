import { useState } from "react";
import "./App.css";
import SearchBar from "./pages/SearchBar";
import axios from "axios";
import WeatherCard from "./pages/WeatherCard";
import Background from "./pages/Background";
import LoadingAnimation from "./pages/LoadingAnimation";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchweather = async (city) => {
    setLoading(true);
    setErr(null);
    setWeather(null); 
  
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
  
      
      setTimeout(() => {
        setWeather(response.data);
        setLoading(false);
      }, 1000);
  
    } catch (er) {
      setErr("An error occurred. Please try again.");
      setLoading(false);
    }
  };
  return (
    <>
      <Background />
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">Weather Dashboard</h1>
        <SearchBar fetchweather={fetchweather} />
        
        {loading && <LoadingAnimation />}
        {err && <p className="text-red-500 mt-5">{err}</p>}
        {!loading && weather && <WeatherCard weather={weather} />}
      </div>
    </>
  );
}

export default App;
