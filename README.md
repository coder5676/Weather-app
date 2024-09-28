# Weather App

This is a simple weather application that provides a 4-day forecast with 3-hour intervals and the current weather conditions. The app uses the OpenWeather API to fetch weather data and changes the background based on day and night.

## Features

- Current weather conditions
- 4-day weather forecast with 3-hour intervals
- Dynamic background change based on day and night

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeather API

## Getting Started

### Prerequisites

- A modern web browser
- An API key from [OpenWeather](https://openweathermap.org/api)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```
3. Open `index.html` in your web browser.

### Usage

1. Obtain an API key from [OpenWeather](https://openweathermap.org/api).
2. Open `script.js` and replace `'YOUR_API_KEY'` with your actual API key:
    ```javascript
    const apiKey = 'YOUR_API_KEY';
    ```
3. Save the changes and refresh the `index.html` file in your browser.

## Project Structure

```plaintext
weather-app/
├── index.html
├── style.css
└── script.js

1.index.html: The main HTML file.
2.weather.css: The CSS file for styling the app.
3.weather.js: The JavaScript file for fetching and displaying weather data.

4.API Reference:
  OpenWeather API
5.Contributing
  Contributions are welcome! Please fork the repository and create a pull request with your changes.

6.License
  This project is licensed under the MIT License - see the LICENSE file for details.

7.Acknowledgements
  OpenWeather for providing the weather data API.
