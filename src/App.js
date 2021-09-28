import { useState } from "react";
import Logo from "../src/images/logo.png";
import "./styles.css";

const myRecommendations = {
  "sci-fi": { "The Martian": 4.9, Predestination: 4.8, Intestellar: 4.7 },
  action: {
    "Avengers: Infinity War": 4.9,
    "John Wick": 4.9,
    "Mad Max: Fury Road": 4.6
  },
  horror: { "Lights Out": 4.5, IT: 4.5, Conjuring: 4.0 },
  humor: { "The Dictator": 4.7, "Munna Bhai M.B.B.S": 4.5, "Free Guy": 4.4 },
  fantasy: {
    "Harry Potter and The Deathly Hallows: Part 1": 4.9,
    "Harry Potter and The Deathly Hallows: Part 2": 4.9,
    "Harry Potter and The Order of the Phoenix": 4.9
  },
  mystery: { "Shutter Island": 4.9, Identity: 4.8, Seven: 4.7 }
};

const myRecommendationsSynopsis = {
  "The Martian":
    "Mark Watney is stranded on the planet of Mars after his crew leaves him behind, presuming him to be dead due to a storm. With minimum supplies, Mark struggles to keep himself alive.",
  Intestellar:
    "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  Predestination:
    "As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975. The hunt, however, turns out to be beyond the bounds of possibility.",
  "Mad Max: Fury Road":
    "Haunted by his turbulent past, Mad Max believes the best way to survive is to wander alone. Nevertheless, he becomes swept up with a group fleeing across the Wasteland in a War Rig driven by an elite Imperator, Furiosa. They are escaping a Citadel tyrannized by the Immortan Joe, from whom something irreplaceable has been taken. Enraged, the Warlord marshals all his gangs and pursues the rebels ruthlessly in the high-octane Road War that follows.",
  "Avengers: Infinity War":
    "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
  "John Wick":
    "Legendary assassin John Wickretired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father -- John's former colleague -- puts a huge bounty on John's head.",
  "Lights Out":
    "Rebecca and her boyfriend try to investigate the connection between her mother and her imaginary friend, Diana, after her stepfather is murdered by a supernatural entity.",
  IT:
    "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.",
  Conjuring:
    "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them.",
  "The Dictator":
    "Aladeen, a brutal dictator, travels to New York in order to address the United Nations Security Council. However, his plans go south when a hitman hired by his uncle, Tamir, kidnaps him.",
  "Free Guy":
    "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
  "Munna Bhai: M.B.B.S":
    "Munna is a goon who sets out to fulfil his father's dream of becoming a doctor. With some help from his ally, Circuit, he enrols himself in a medical college and drives Dr Asthana up the wall.",
  "Harry Potter and The Deathly Hallows: Part 1":
    "After Voldemort takes over the Ministry of Magic, Harry, Ron and Hermione are forced into hiding. They try to decipher the clues left to them by Dumbledore to find and destroy Voldemort's Horcruxes.",
  "Harry Potter and The Deathly Hallows: Part 2":
    "Harry, Ron and Hermione race against time to destroy the remaining Horcruxes. Meanwhile, the students and teachers unite to defend Hogwarts against Lord Voldemort and the Death Eaters.",
  "Harry Potter and The Order of the Phoenix":
    "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry.",
  "Shutter Island":
    "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
  Identity:
    "When a vicious storm breaks out in the Nevada desert, 10 people seek refuge in an isolated motel. At the same time, a serial killer under the care of psychiatrist Doctor Mallick -- who has just found the killer's revealing journal -- awaits execution for murdering a group of motel guests. When the storm-stranded travelers realize they are being killed off one by one, limo driver Ed Dakota bids to stay alive and reveal the murderer's identity.",
  Seven:
    "A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal."
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
                <p className="movie-title">{key}</p>
                <span className="movie-rating">{currentValue} / 5</span>
                <p className="movie-synopsis">
                  {myRecommendationsSynopsis[key]}
                </p>
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
