const defaultGameData = {
  boards: [
    {
      categories: [
        "ASSASSINATION CITIES",
        "CARTOON CANINES",
        "BITE ME",
        "3 LETTER WORDS 2 VOWELS",
        "LITERARY RESIDENCES",
      ],
      questions: [
        [
          {
            points: 200,
            question: "JFK November 22, 1963",
            answer: "What is Dallas?",
            revealed: false,
          },
          {
            points: 400,
            question: "Kim Jong-nam February 13, 2017",
            answer: "What is Kuala Lumpur?",
            revealed: false,
          },
          {
            points: 600,
            question: "Tupac Shakur September 7, 1996",
            answer: "What is Las Vegas?",
            revealed: false,
          },
          {
            points: 800,
            question: "Martin Luther King, Jr. April 4, 1968",
            answer: "What is Memphis?",
            revealed: false,
          },
          {
            points: 1000,
            question: "Benazir Bhutto December 27, 2007",
            answer: "What is Rawalpindi?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question:
              "This beagle is Charlie Brown's pet in the Peanuts comic strip",
            answer: "Who is Snoopy?",
            revealed: false,
          },
          {
            points: 400,
            question: "The Simpsons' greyhound pet dog",
            answer: "Who is Santa's Little Helper?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "Tintin's dog, known for his blue coat and adventures with the young reporter",
            answer: "Who is Snowy?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "He is a lovable, yellow-furred, brown-eared beagle, who is Garfield's best friend (and usual victim).",
            answer: "Who is Odie?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This dog is the pet of the Jetsons family, known for his robotic abilities and futuristic antics",
            answer: "Who is Astro?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question:
              "This Italian cured meat is paper-thin and often paired with melon or figs",
            answer: "What is prosciutto?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "This Japanese delicacy of raw fish has a firm bite and is often served with wasabi",
            answer: "What is sashimi?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "This fermented Korean cabbage dish is known for its spicy, tangy bite",
            answer: "What is kimchi?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "This Scottish delicacy consists of sheep's organs minced with oats and spices, traditionally encased in the animal's stomach",
            answer: "What is haggis?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This Mexican delicacy of ant larvae is harvested from agave roots and has a buttery, nutty bite",
            answer: "What is escamoles?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question:
              "In ancient Egypt, this organ was thought to be the seat of intelligence and emotion",
            answer: "What is eye?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "This three-letter word means to be in debt or under obligation to pay",
            answer: "What is owe?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "This geological term refers to a long period of time, often millions of years",
            answer: "What is eon?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "This three-letter word means to inspire wonder or reverence",
            answer: "What is awe?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This French word for water is also used in perfumery and means 'of water'",
            answer: "What is eau?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question:
              "This address is where Harry Potter lived with the Dursleys",
            answer: "What is 4 Privet Drive?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "This residence is the home of Sherlock Holmes in Arthur Conan Doyle's stories",
            answer: "What is 221B Baker Street?",
            revealed: false,
          },
          {
            points: 600,
            question: "This address is of Hercule Poirot's residence in Agatha Christie's novels",
            answer: "What is Whitehaven Mansions?",
            revealed: false,
          },
          {
            points: 800,
            question:
              'This is the address of the Bennet family in Jane Austen\'s "Pride and Prejudice"',
            answer: "What is Longbourn, Hertfordshire?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This London address is where Bertie Wooster lives in P.G. Wodehouse's stories",
            answer: "What is 6A Crichton Mansions or Berkeley Mansions?",
            revealed: false,
          },
        ],
      ],
    },
    {
      categories: [
        "EX-CAPITALS",
        "INSTRUMENT MAKERS",
        "WORLD LEADERS",
        "JUST DESSERTS",
        "'P's & 'Q's",
      ],

      questions: [
        [
          {
            points: 400,
            question: "This city served as Nigeria's capital before Abuja",
            answer: "What is Lagos?",
            revealed: false,
          },
          {
            points: 800,
            question: "This city was the capital of Brazil before Brasília",
            answer: "What is Rio de Janeiro?",
            revealed: false,
          },
          {
            points: 1200,
            question: "This city was the capital of the Tanzania before Dodoma",
            answer: "What is Dar es Salaam?",
            revealed: false,
          },
          {
            points: 1600,
            question: "This city was the capital of Morocco before Rabat",
            answer: "What is Fes or Fez?",
            revealed: false,
          },
          {
            points: 2000,
            question: "This city was the capital of Kazakhstan before Astana",
            answer: "What is Almaty?",
            revealed: false,
          },
        ],
        [
          {
            points: 400,
            question:
              "In 1850 Heinrich Steinweg came to America from Germany, anglicized his name & began manufacturing these",
            answer: "What is a piano?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "Trumpets made by Vincent Bach are so well-respected, this violin maker's name was added to the name of some models",
            answer: "Who is Stradivarius?",
            revealed: false,
          },
          {
            points: 1200,
            question:
              "The Ottoman sultan granted a family the name 'Zildjian', which literally means this metal percussion instrument 'maker'",
            answer: "What is a cymbal?",
            revealed: false,
          },
          {
            points: 1600,
            question:
              "Hohner makes the Bob Dylan signature model of this instrument that Bob plays",
            answer: "What is a harmonica?",
            revealed: false,
          },
          {
            points: 2000,
            question:
              "In the 1930s this man turned his experiences making clocks & motors into inventing an electric organ",
            answer: "Who is Laurens Hammond?",
            revealed: false,
          },
        ],
        [
          {
            points: 400,
            question:
              "He reigned from 1066 to 1087 & one of those years should really help you",
            answer: "Who is William the Conqueror?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "In 2003 it all came crashing down around him, including his statue on April 9",
            answer: "Who is Saddam Hussein?",
            revealed: false,
          },
          {
            points: 1200,
            question:
              "He led from 1799 to 1814, took an unwanted vacation, returned & then was gone for good in 1815",
            answer: "Who is Napoleon Bonaparte?",
            revealed: false,
          },
          {
            points: 1600,
            question:
              "Nicknamed 'Uncle', this Communist was a leader in Vietnam from 1945 to 1969",
            answer: "Who is Ho Chi Minh?",
            revealed: false,
          },
          {
            points: 2000,
            question:
              "Popular in 37 A.D., this man whose name means 'little boot' was sent walking 4 years later",
            answer: "Who is Caligula?",
            revealed: false,
          },
        ],
        [
          {
            points: 400,
            question:
              "Different from the New York style, the Japanese variety of this dessert is known for extreme fluffiness",
            answer: "What is a cheesecake?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "Vienna library has a recipe from 1696 for this flaky pastry & ja, the filling is apple",
            answer: "What is a strudel?",
            revealed: false,
          },
          {
            points: 1200,
            question:
              "This cake was named for being made with 16 ounces each of flour, butter, sugar & eggs",
            answer: "What is a pound cake?",
            revealed: false,
          },
          {
            points: 1600,
            question:
              "Literally 'flash of lightning' in French, this long, thin chocolate-covered pastry really gives me a charge",
            answer: "What is an éclair?",
            revealed: false,
          },
          {
            points: 2000,
            question:
              "This 4-letter caramel custard dessert associated with Spanish recipes dates back to Roman times",
            answer: "What is flan?",
            revealed: false,
          },
        ],
        [
          {
            points: 400,
            question:
              "Made to be movable, like a 19-inch television with a handle on top",
            answer: "What is portable?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "From Latin 'to sieve', it's what coffee does in some coffeepots",
            answer: "What is a percolate?",
            revealed: false,
          },
          {
            points: 1200,
            question:
              "4 speakers were used for this type of audio system popular in the 1970s",
            answer: "What is quadraphonic?",
            revealed: false,
          },
          {
            points: 1600,
            question: "A dilemma, or a state of perplexity or doubt",
            answer: "What is a quandary?",
            revealed: false,
          },
          {
            points: 2000,
            question:
              "Of or belonging to the aristocratic families of ancient Rome",
            answer: "What is a patrician?",
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
