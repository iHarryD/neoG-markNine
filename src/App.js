import { useState } from "react";
import Logo from "../src/images/logo.png";
import "./styles.css";

const myRecommendations = {
  "sci-fi": { "The Martian": 4.9, Intesteller: 4.7, Predestination: 4.8 },
  action: {
    "Mad Max: Fury Road": 4.6,
    "Avengers: Infinity War": 4.9,
    "John Wick": 4.9
  },
  horror: { "Lights Out": 4.5, IT: 4.5, Conjuring: 4.0 },
  humor: { "The Dictator": 4.7, "Free Guy": 4.5, "Munna Bhai M.B.B.S": 4.5 },
  fantasy: {
    "Harry Potter": 4.9,
    "Again Harry Potter": 4.9,
    "And again Harry Potter": 4.9
  },
  mystery: { "Shutter Island": 4.9, Identity: 4.8, Seven: 4.7 }
};

const genresAvailable = Object.keys(myRecommendations);

export default function App() {
  const [activeGenre, setActiveGenre] = useState(
    Object.keys(myRecommendations)[0]
  );

  let currentKeys = Object.keys(myRecommendations[activeGenre]);

  let currentValues = Object.values(myRecommendations[activeGenre]);

  return (
    <div className="App">
      <header>
        <h1>Recommender</h1>
        <div className="logo-head">
          <img src={Logo} alt="logo" />
        </div>
      </header>
      <main>
        <div className="genre-filter-div">
          <p>Select genre to get started: </p>
          <ul>
            {genresAvailable.map((genre) => {
              return (
                <li>
                  <button
                    key={genre}
                    onClick={() => {
                      setActiveGenre(genre);
                    }}
                  >
                    {genre}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="recommendations">
          {currentKeys.map((key, index) => {
            let currentValue = currentValues[index];
            return (
              <li key={key}>
                <p>{key}</p>
                <span>{currentValue} / 5</span>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <ul id="social-media-tab">
          <li>
            <a className="social-media-links" href="https://github.com/iHarryD">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="social-media-links"
              href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p id="portfolio-link">
          Website created by
          <a href="https://iharryd.github.io/personal-portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}
