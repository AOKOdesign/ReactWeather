var React = require('react');

var About = (props) => {
  return (
    <div className="container">
      <h1 className="text-center">About</h1>
      <div className="callout primary">
        <h5>Whoa, you've found the about page!</h5>
        <p>This is a simple ReactJS weather fetching application utilizing the OpenWeatherMap API.</p>
        <a href="https://github.com/AOKOdesign/ReactWeather">GitHub Repo</a>
        <br />
        <a href="http://openweathermap.org/">OpenWeatherMap</a>
        <p>Built with love by <a href="http://www.aoko.ca/">AOKO</a></p>
      </div>
    </div>
  )
};

module.exports = About;
