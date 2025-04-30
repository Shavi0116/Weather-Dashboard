# Weather Dashboard

## Overview
The Weather Dashboard is a React-based web application that provides real-time weather updates for any city. The app integrates the OpenWeatherMap API to fetch weather data and displays it in an interactive and visually appealing manner. The application features a dynamic background that changes based on the selected theme (Light/Dark mode).

## Features
- Search for real-time weather updates by city name
- Displays temperature, weather conditions, humidity, and wind speed
- Animated weather icons fetched directly from the API
- Loading animation while fetching weather data
- Light/Dark mode toggle with background change
- Responsive design for desktop and mobile users

## Technologies Used
- React.js
- Tailwind CSS
- Framer Motion (for animations)
- OpenWeatherMap API
- Axios (for API requests)
- Netlify (for deployment)

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-dashboard
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```sh
     VITE_API_KEY=your_openweathermap_api_key
     ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open `http://localhost:5173/` in your browser.

## Usage
1. Enter a city name in the search bar.
2. The application will display the current weather conditions for that city.
3. Toggle between Light and Dark themes using the button at the top-right corner.

## Future Enhancements
- Add a 5-day weather forecast feature
- Implement geolocation support to fetch weather data for the user's current location
- Improve UI/UX with more animations and transitions


