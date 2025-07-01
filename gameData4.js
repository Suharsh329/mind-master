const defaultGameData = {
  boards: [
    {
      categories: [
        "HOMONYMS",
        "DROPS OF JUPITER",
        "Board Games",
        "JUMP FOR JOY",
        "_A_A_A",
      ],
      questions: [
        [
          {
            points: 200,
            question:
              "What someone in a bowling alley or on a pitcher's mound hopes to throw.",
            answer: "What is a strike?",
            revealed: false,
          },
          {
            points: 400,
            question: "A line of seats in a theater or a quarrel.",
            answer: "What is a row?",
            revealed: false,
          },
          {
            points: 600,
            question: "16 American ounces or 100 British pence.",
            answer: "What is a pound?",
            revealed: false,
          },
          {
            points: 800,
            question: "The front of a ship or to bend forward in respect.",
            answer: "What is a bow?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "A loud, unpleasant noise or a fraudulent scheme to get money.",
            answer: "What is a racket?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "This murder mystery game was invented during WWII air raids by Anthony Pratt to pass time, with original pieces made of toxic lead.",
            answer: "What is Clue (or Cluedo)",
            revealed: false,
          },
          {
            points: 400,
            question:
              "While it was popular in Cuba, Fidel Castro shamed this game as being 'symbolic of an imperialistic and capitalistic system'",
            answer: "What is monopoly?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "Two skydivers played this letter-based game while falling from 13,000 feet to celebrate its 60th birthday in 2008.",
            answer: "What is Scrabble?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "The Taliban banned this ancient strategy game in Afghanistan in 2025, claiming it promotes gambling under Islamic law.",
            answer: "What is chess?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This game invented in 1860 originally included squares for 'Suicide', 'Disgrace', 'Poverty', and 'Prison'.",
            answer: "What is The Game of Life?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "This colorfully named region of Jupiter produces wind-speeds up to 432 kmph (268 mph).",
            answer: "What is the Great Red Spot?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "Jupiter is made up mostly of these gases, the first 2 elements on the periodic table",
            answer: "What are hydrogen and helium?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "Named for a Trojan hero, it's the largest of Jupiter's Galilean moons., which is also the largest moon in the solar system",
            answer: "What is Ganymede?",
            revealed: false,
          },
          {
            points: 800,
            question:
              " It takes over 11 years for Jupiter to orbit the Sun at 5.2 AU, short for these",
            answer: "What is astronomical units?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "Jupiter's rings were discovered in 1979 by this interstellar probe that contained a golden record",
            answer: "What is Voyager 1?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question: "This toy is essential to playing Double Dutch.",
            answer: "What is a jump rope?",
            revealed: false,
          },
          {
            points: 400,
            question:
              " If your car's battery dies, hope you have a pair of these.",
            answer: "What are jumper cables?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "A 2012 film adaptation of this Fox show starred Channing Tatum and Jonah Hill",
            answer: "What is 21 Jump Street?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "Roots” is responsible for reviving this African-American wedding custom.",
            answer: "What is jumping the broom?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "Carl Boenish is considered the father of the modern version of this extreme sport",
            answer: "What is BASE jumping?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "A region bounded by the Mediterranean Coastal region to the north, and the Sahel to the south.",
            answer: "What is the Sahara?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "After Santo Domingo, this capital city has the second most populous metropolitan area in the entire Caribbean",
            answer: "What is Havana?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "First name of a female education activist who won the nobel peace prize",
            answer: "What is Malala?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "A sword characterized by a curved, single edge blade with a long grip",
            answer: "What is a Katana?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This large berry is ripe when it turns orange and has black seeds in its large central cavity",
            answer: "What is a Papaya?",
            revealed: false,
          },
        ],
      ],
    },
  ],
  defaultPlayers: [
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
  ],
};

// Export the game data
export { defaultGameData };
