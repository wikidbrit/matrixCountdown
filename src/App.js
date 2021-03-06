import React, { useEffect, useState } from "react";
import "./App.css";
import "../src/glitch.css";
import ReactPlayer from "react-player";
import Video from "./videos/0.mp4";

import Header from "../src/components/header"

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2021-12-22`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="time">
        <span className={interval}>
          <h2>{timeLeft[interval]}</h2> <code>{interval}</code>
        </span>
      </div>
    );
  });
  return (
    <div className="App">
      <Header  className="headerTextBox" />

      <div className="timerBox">
        
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>It Ends Tonight</span>
        )}

      </div>
      <div className="trailerBox">
        <ReactPlayer
          className="video"
          width='100%'
          controls
          autoplay="false"
          url="https://www.youtube.com/watch?v=9ix7TUGVYIo"
        />
      </div>
      {/* <div className="trailerBox">
        <ReactPlayer
          className="video"
          controls
          autoplay="false"
          url="https://www.youtube.com/watch?v=9ix7TUGVYIo"
        />
      </div> */}

      <video id="bgVideo" preload="true" autoplay="true" loop muted>
        <source src={Video} type="video/mp4"></source>
      </video>
      <nav className="bottomNav">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.warnerbros.com/movies/the-matrix-resurrections"
          className="wb"
        >
          <svg
            height="60px"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#204829"
              d="M 177.25826,3.4148925e-4 C 168.59542,1.8490915 92.354842,11.831561 82.863603,16.574651 c -2.187178,4.37941 -6.758533,18.04297 -8.208233,20.20488 -6.127129,1.31837 -30.956394,6.04126 -32.517223,6.94544 -0.873861,2.62662 -6.579213,13.84033 -7.892531,15.15364 -5.258319,1.31332 -29.7718853,5.85815 -32.8329239,8.05038 C -0.33502981,77.435521 -7.0076905,182.56657 36.771225,251.2985 80.550143,320.03044 157.11904,365.7806 177.25826,370.16001 l 0.15783,0 C 197.5553,365.7806 273.96636,320.03045 317.74528,251.2985 361.51915,182.56152 355.0195,77.435521 353.26166,66.928991 c -3.06609,-2.19223 -27.58469,-6.73706 -32.83293,-8.05038 -1.31332,-1.31331 -7.01363,-12.52702 -7.89252,-15.15364 -1.55578,-0.90418 -26.38,-5.63212 -32.51723,-6.94544 -1.4497,-2.16191 -6.016,-15.82547 -8.20824,-20.20488 C 262.34982,11.846711 186.04232,1.8844415 177.25825,3.4148925e-4 z m 0,26.83460951075 c 7.50611,1.60629 72.73251,10.32342 80.8195,14.36439 1.86391,3.74296 5.71294,15.35697 6.94544,17.20572 5.23811,1.12138 26.60603,5.06763 27.93956,5.84047 0.74757,2.24274 5.5033,11.98024 6.62971,13.10162 4.49053,1.12136 25.48087,4.91861 28.0974,6.78756 1.50022,8.98107 7.11214,98.789229 -30.30731,157.534909 -37.41943,58.75072 -102.75189,97.91788 -119.96645,101.65578 l -0.15783,0 C 160.04371,339.58749 94.711236,300.4153 57.291804,241.66962 19.877424,182.92394 25.489328,93.115781 26.984489,84.134711 c 2.621583,-1.874 23.606872,-5.6662 28.097407,-6.78756 1.126422,-1.12138 5.882144,-10.85888 6.629724,-13.10162 1.333523,-0.77284 22.543592,-4.71909 27.781707,-5.84047 1.237544,-1.84875 5.234326,-13.46276 7.103277,-17.20572 8.107206,-4.05612 73.256576,-12.78842 80.661656,-14.36439 z"
              id="path5"
            />
            <path
              fill="#204829"
              d="m 189.25491,55.563751 c -2.4594,0.24246 -2.82617,1.96367 -2.84131,2.68346 -0.50512,84.082609 -0.26519,173.283359 -0.94711,259.664249 0.55562,2.7327 4.91357,-1.46739 7.41897,-2.84131 31.8934,-17.53279 131.36959,-113.87469 74.18979,-148.37957 43.78396,-28.63031 35.98109,-55.95362 16.57431,-70.874919 -40.1269,-30.868 -85.9086,-38.53196 -91.23764,-39.93621 -1.33226,-0.35105 -2.33722,-0.39651 -3.15701,-0.3157 z m 26.67674,34.56929 c 0.62131,-0.33844 26.34212,9.197 40.40976,18.784229 16.12853,10.99145 10.66818,21.55481 1.2628,27.93955 -5.10678,3.48029 -36.70973,26.17794 -41.98826,27.466 -0.1162,-4.3794 -0.13894,-53.76265 0.3157,-74.189779 z m 23.51975,96.131019 c 3.5236,0.10844 6.87091,1.23502 9.31319,3.78841 2.18212,2.08616 11.80089,12.45504 -8.68179,42.14611 -7.62733,13.46655 -23.62076,30.35656 -25.41394,32.04367 -0.21723,0.0606 -0.30686,-0.27403 -0.47356,-0.15785 0.1667,-9.65287 -0.0921,-56.38171 0.47356,-69.45426 1.13272,-0.59099 14.21168,-8.69141 24.78254,-8.36607 z"
              id="path9"
            />
            <path
              fill="#204829"
              id="path15"
              d="m 80.528675,85.840761 c -2.621583,1.12138 -24.953022,15.340569 -27.200816,17.583309 -0.621298,19.82098 4.692584,73.29824 24.266058,115.03646 2.475098,5.27852 5.162345,10.22872 8.071848,14.70915 5.581599,9.63772 5.894774,8.87499 12.390641,-0.35359 4.500634,-6.08672 10.991444,-15.11325 12.617944,-16.97209 2.24274,7.48085 16.74479,54.14401 37.14162,82.34497 9.04167,12.51187 22.92747,24.33172 22.87191,19.46235 -0.55563,-47.64815 -1.91946,-253.899539 -0.4243,-262.304759 -6.016,-0.14146 -25.75111,2.42963 -29.65571,4.45517 -0.32327,7.54146 2.71251,148.965509 0.84356,165.048589 -13.82519,-33.68153 -18.54302,-122.56277 -15.81032,-159.234629 -7.48085,1.49515 -25.725854,8.81437 -28.342386,11.43594 -3.364113,6.73328 1.227447,80.582119 6.005896,105.368449 -1.63154,2.57107 -6.334227,9.55186 -7.081807,10.67323 C 86.756829,176.06564 77.710095,123.42184 80.528675,85.840761 z"
            />
          </svg>
        </a>

        <a
          href="https://www.imdb.com/title/tt10838180/"
          className="imdb"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            height="50px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#204829"
              className="imdbIcon"
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"
            ></path>
          </svg>
        </a>

        <a
          href="https://www.reddit.com/r/matrix/comments/plo0ij/franchise_creator_lana_wachowski_and_her/"
          className="reddit"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="50px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="#204829"
          >
            <path d="M584 548a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm245 477.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-.1 29.3-17.8 54.6-43.1 65.8zm-171.3 83c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6zM296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440zm72 108a36 36 0 1 0 72 0 36 36 0 1 0-72 0z" />
          </svg>
        </a>
      </nav>
    </div>
  );
}

export default App;
