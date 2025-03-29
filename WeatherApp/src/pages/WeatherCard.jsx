import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main) {
    return <p>Weather data is not available</p>;
  }
  const getWeatherEmoji = () => {
    const condition = weather.weather?.[0]?.main.toLowerCase();

    if (condition.includes("clear")) return "☀️"; 
    if (condition.includes("rain")) return "🌧️";
    if (condition.includes("snow")) return "❄️";
    if (condition.includes("thunderstorm")) return "⛈️"; 
    if (condition.includes("cloud")) return "☁️"; 
    if (condition.includes("drizzle")) return "🌦️"; 
    if (condition.includes("wind")) return "💨"; 

    return "🌤️"; 
  };

  return (
    <div className="mt-5 p-5 border rounded-lg shadow-md max-w-md mx-auto text-center bg-white">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <motion.div 
        className="text-6xl my-3"
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        {getWeatherEmoji()}
      </motion.div>      
      <p>Temperature: {weather.main?.temp}°C</p>
      <p>Condition: {weather.weather?.[0]?.description}</p>
      <p>Humidity: {weather.main?.humidity}%</p>
      <p>Wind Speed: {weather.wind?.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
