const defaultGameData = {
  boards: [
    {
      categories: [
        "",
        "",
        "",
        "",
        ""
      ],
      questions: [
        [
          {
            points: 200,
            question: "",
            answer: "",
            revealed: false,
          }
        ],
        [],
        [],
        [],
        []
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
