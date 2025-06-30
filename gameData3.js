const defaultGameData = {
  boards: [
    {
      categories: [
        "JUST NAMES",
        "CURRENT HITS",
        "PLASTICS",
        "JUST MY LUCK",
        "A_A_A",
      ],
      questions: [
        [
          {
            points: 200,
            question: "To steal",
            answer: "What is Rob?",
            revealed: false,
          },
          {
            points: 400,
            question: "Italian for 'beautiful'",
            answer: "What is Bella?",
            revealed: false,
          },
          {
            points: 600,
            question: "A song's tune",
            answer: "What is Melody?",
            revealed: false,
          },
          {
            points: 800,
            question: "Someone who makes barrels",
            answer: "What is Cooper?",
            revealed: false,
          },
          {
            points: 1000,
            question: "To walk through water",
            answer: "What is Wade?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "Spending 13 weeks on top, the name of this Kendrick Lamar and SZA track references an R&B legend who was 'Never Too Much'",
            answer: "What is Luther?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "This #2 hit by Drake is named for a Finnish tech company whose phones were popular in the 90s and 2000s",
            answer: "What is Nokia?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "The title of this current hit by Alex Warren can also mean normal or routine",
            answer: "What is Ordinary?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "'Just Keep Watching' this Canadian singer and dancer who landed both her first #1 album, 'So Close To What', and #1 single, 'What I Want' with Morgan Wallen, in 2025",
            answer: "Who is Tate McRae?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "Chappell Roan 'ain't no country boy quitter' she 'gets the job done' as she sings on this song, also the title of a Lois Lowry novel",
            answer: "What is The Giver?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "This ocean's Great Garbage Patch is made of plastic from China, the Philippines, and other countries.",
            answer: "What is the Pacific Ocean?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "Polylactic acid is this type of plastic, able to be decomposed by the actions of living organisms.",
            answer: "What is Biodegradable Plastic?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "It's the 6-letter brand name for polytetrafluoroethylene, used as a non-stick coating for cookware.",
            answer: "What is Teflon?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "Plastics are mostly made of these large molecules, from the Greek for 'many units'",
            answer: "What is Polymer?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "HIPS, short for this durable kind of polystyrene, is commonly used to make automotive parts",
            answer: "What is High Impact Polystyrene?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "The 1620 play 'Astrologaster' is the first known reference to this 4-leaf plant of the genus Trifolium as a good luck symbol",
            answer: "What is a Clover?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "At the stroke of midnight on New Year's Day, Spaniards don't 'wine' about eating this fruit for good luck.",
            answer: "What is a Grape?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "In the Ojibwe culture, these talismans are weaved to let good spirits through and trap bad spirits",
            answer: "What are Dreamcatchers?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "You'll have to reach a little higher for this lucky number in China; it sounds like their word for 'fortune'",
            answer: "What is Eight?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "Sailors consider it good luck if they see this bird, also a golf score of 3 under par.",
            answer: "What is an Albatross?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question:
              "The first word in the 'Killing Curse' in the Harry Potter series",
            answer: "What is AVADA?",
            revealed: false,
          },
          {
            points: 400,
            question: "A general term for a yoga pose of various types",
            answer: "What is ASANA?",
            revealed: false,
          },
          {
            points: 600,
            question: "The second word in the name of the capital of Ethiopia",
            answer: "What is ABABA?",
            revealed: false,
          },
          {
            points: 800,
            question:
              "This is a genus of freshwater fish in the cichlid family, popular in aquariums.",
            answer: "What is ACARA?",
            revealed: false,
          },
          {
            points: 1000,
            question: "A species of banana that is endemic to the Philippines",
            answer: "What is ABACA?",
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
