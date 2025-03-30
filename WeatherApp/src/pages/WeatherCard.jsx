import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.weather) {
    return <p>Weather data is not available</p>;
  }

  return (
    <div className="mt-5 p-5 border rounded-lg shadow-md max-w-md mx-auto text-center bg-white">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      
      <motion.img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto my-3 w-20 h-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />

      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
