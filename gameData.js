// Default game data
const defaultGameData = {
  boards: [
    {
      categories: [
        "HOMOPHONIC PAIRS",
        "MY 'MAN'!",
        "CHECK YOUR CALENDAR",
        "A CONTAINER FULL OF WORDS",
        "GET YOUR GROUP ON",
      ],
      questions: [
        [
          {
            points: 200,
            question: "A story about a beastly appendage",
            answer: "What is a tail tale?",
            revealed: false,
          },
          {
            points: 400,
            question: "To wander through the land of the Caesars",
            answer: "What is roam Rome?",
            revealed: false,
          },
          {
            points: 600,
            question: "The right moment for a pungent herb of the mint family",
            answer: "What is thyme time?",
            revealed: false,
          },
          {
            points: 800,
            question: "The 60 minutes that belong to you & me",
            answer: "What is our hour?",
            revealed: false,
          },
          {
            points: 1000,
            question: "A scratchy & hard-to-wear elaborate starched collar",
            answer: "What is a rough ruff?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question: "It's a 3-D representation of human form, dummy",
            answer: "What is a mannequin?",
            revealed: false,
          },
          {
            points: 400,
            question: "Hand shackles",
            answer: "What are manacles?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "It's your destiny to know this 8-letter word means 'to show plainly'",
            answer: "What is manifest?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "A royal command, or one from a superior court to a lower one",
            answer: "What is a mandate?",
            revealed: false,
          },

          {
            points: 1000,
            question:
              "It conveys air & fuel from the carburetor to the cylinders",
            answer: "What is a manifold?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question:
              "Colorful nickname for November 28, 2025, knowing that Thanksgiving is November 27",
            answer: "What is Black Friday?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "You are this sign of the zodiac if your birthday falls between December 22 & January 19",
            answer: "What is a Capricorn?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "Bastille Day, Parents' Day & Nelson Mandela Day are all observed during this month",
            answer: "What is July?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "Place your bets--this sporting event established in 1875 takes place the first Saturday in May",
            answer: "What is the Kentucky Derby?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "Commemorating an event from 1777, June 14 is this holiday in the U.S.",
            answer: "What is Flag Day?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "A woven container, or the structure under a hot air balloon for the crew & equipment",
            answer: "What is a basket?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "A handbag; it can also refer to the prize money in a boxing match",
            answer: "What is a purse?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "Wearable term for the box from which cards are dealt for blackjack in a casino",
            answer: "What is a shoe?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "This small glass container can begin with 'v' or with 'ph'",
            answer: "What is a vial (phial)?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "From the Latin for 'box', it's an underground reservoir for collecting rainwater",
            answer: "What is a cistern?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question: "This group of 7 includes envy, pride & sloth",
            answer: "What are the 7 deadly sins?",
            revealed: false,
          },
          {
            points: 400,
            question: "Albania & Kosovo are among this group of countries that cover a peninsula in Europe",
            answer: "What is the Balkans?",
            revealed: false,
          },
          {
            points: 600,
            question: "The North Star is part of this famous grouping within Ursa Minor",
            answer: "What is the Little Dipper?",
            revealed: false,
          },
          {
            points: 800,
            question: "In this type of lawsuit, legal action is filed against a defendant on behalf of a group of people",
            answer: "What is a class action lawsuit?",
            revealed: false,
          },
          {
            points: 1000,
            question: "They include Percival, Gareth & Galahad",
            answer: "What are the Knights of the Round Table?",
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
