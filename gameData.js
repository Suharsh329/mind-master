// Default game data
const defaultGameData = {
  boards: [
    {
      categories: [
        "Better known by one name",
        "It is slang-tastic",
        "Brand Names",
        "V-ocabulary",
        "Literary Significant Others",
      ],
      questions: [
        [
          {
            points: 200,
            question: "This Queen of Pop was born Madonna Louise Ciccone",
            answer: "Who is Madonna?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "Born Stefani Joanne Angelina Germanotta, this artist is known for hits like 'Bad Romance'",
            answer: "Who is Lady Gaga?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "This 'Material Girl' singer's real name is Madonna Louise Ciccone",
            answer: "Who is Madonna?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "Born Eric Arthur Blair, this author wrote '1984' and 'Animal Farm'",
            answer: "Who is George Orwell?",
            revealed: false,
          },
          {
            points: 1000,
            question: "This boxing legend was born Cassius Marcellus Clay Jr.",
            answer: "Who is Muhammad Ali?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question: "This word means 'excellent' and rhymes with 'lit'",
            answer: "What is 'sick'?",
            revealed: false,
          },
          {
            points: 400,
            question: "When something is 'fire,' it means this",
            answer: "What is awesome or amazing?",
            revealed: false,
          },
          {
            points: 600,
            question: "To 'ghost' someone means to do this to them",
            answer: "What is ignore them or cut off contact?",
            revealed: false,
          },
          {
            points: 800,
            question: "This 3-letter abbreviation means 'laughing out loud'",
            answer: "What is LOL?",
            revealed: false,
          },
          {
            points: 1000,
            question: "When someone is 'sus,' they are this",
            answer: "What is suspicious?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question: "This swoosh logo belongs to this athletic brand",
            answer: "What is Nike?",
            revealed: false,
          },
          {
            points: 400,
            question: "This coffee chain's logo features a green mermaid",
            answer: "What is Starbucks?",
            revealed: false,
          },
          {
            points: 600,
            question: "This tech company's slogan is 'Think Different'",
            answer: "What is Apple?",
            revealed: false,
          },
          {
            points: 800,
            question: "This fast-food chain is 'lovin' it'",
            answer: "What is McDonald's?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This luxury car brand's logo features four interlocking rings",
            answer: "What is Audi?",
            revealed: false,
          },
        ],

        [
          {
            points: 200,
            question: "This word means having a lot of energy and enthusiasm",
            answer: "What is vivacious?",
            revealed: false,
          },
          {
            points: 400,
            question: "This type of poem has 14 lines and often expresses love",
            answer:
              "What is a sonnet? (Wait, that doesn't start with V... What is verse?)",
            revealed: false,
          },
          {
            points: 600,
            question: "This word means to disappear suddenly",
            answer: "What is vanish?",
            revealed: false,
          },
          {
            points: 800,
            question: "This word describes someone who eats only plants",
            answer: "What is vegetarian (or vegan)?",
            revealed: false,
          },
          {
            points: 1000,
            question: "This means having the power to see into the future",
            answer: "What is visionary?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question: "Romeo's beloved in Shakespeare's tragic play",
            answer: "Who is Juliet?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "Elizabeth Bennet's eventual husband in 'Pride and Prejudice'",
            answer: "Who is Mr. Darcy?",
            revealed: false,
          },
          {
            points: 600,
            question: "Scarlett O'Hara's true love in 'Gone with the Wind'",
            answer: "Who is Rhett Butler?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "This woman drives Gatsby's obsession in Fitzgerald's novel",
            answer: "Who is Daisy Buchanan?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "Odysseus's faithful wife who waits 20 years for his return",
            answer: "Who is Penelope?",
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
