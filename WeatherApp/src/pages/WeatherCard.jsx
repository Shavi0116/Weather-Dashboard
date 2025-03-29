const WeatherCard = ({ weather }) => {
    if (!weather || !weather.main) {
      return <p>Weather data is not available</p>;
    }
  
    return (
      <div className="mt-5 p-5 border rounded-lg shadow-md max-w-md mx-auto text center">
        <h2 className="text-2x1 font-bold">{weather.name}</h2>
        <p>Temperature: {weather.main?.temp}°C</p>
        <p>Condition: {weather.weather?.[0]?.description}</p>
        <p>Humidity: {weather.main?.humidity}%</p>
        <p>Wind Speed: {weather.wind?.speed} km/h</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`} alt="Weather Icon"
          className="mx-auto"
        />
      </div>
    );
  };
  
  export default WeatherCard;
  