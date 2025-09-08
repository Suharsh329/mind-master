const defaultGameData = {
  boards: [
    {
      categories: ["ALL ABOUT NASA", "JOB DESCRIPTION", "THE HUMAN BODY", "ANIMALS", "SCOTT FREE"],
      questions: [
        [
          {
            points: 200,
            question: "Launched in 2024, NASA's Europa Clipper is tasked with studying a moon of this largest planet.",
            answer: "What is Jupiter?",
            revealed: false,
          },
          {
            points: 400,
            question: "2025 saw NASA pick this Elon Musk-founded company to provide the launch service for its Pandora mission.",
            answer: "What is SpaceX?",
            revealed: false,
          },
          {
            points: 600,
            question: "A telescope named for this former NASA administrator was launched on Christmas Day in 2021.",
            answer: "What is James Webb?",
            revealed: false,
          },
          {
            points: 800,
            question: "NASA is working on space stations for the Commercial LEO, short for this, Destination program.",
            answer: "What is Low Earth Orbit?",
            revealed: false,
          },
          {
            points: 1000,
            question: "Named for the Greek nature goddess, this NASA program plans to land a woman on the Moon by 2027.",
            answer: "What is Artemis?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question: "protecting against rip currents; knowing CPR; life's a beach",
            answer: "What is a lifeguard?",
            revealed: false,
          },
          {
            points: 400,
            question: "total silence; wearing white face paint; channeling your inner Marcel Marceau",
            answer: "What is a mime?",
            revealed: false,
          },
          {
            points: 600,
            question: "keeping order in the court; saying “All rise!” when the judge enters; guarding the jury",
            answer: "What is a bailiff?",
            revealed: false,
          },
          {
            points: 800,
            question: "bracing for impact; straightening teeth; may be kept on retainer",
            answer: "What is an orthodontist?",
            revealed: false,
          },
          {
            points: 1000,
            question: "medieval living; routinely work with dripping wax; could it be any hotter?",
            answer: "What is a chandler?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question: "Hair emerges from this tiny pore in the skin",
            answer: "What is a follicle?",
            revealed: false,
          },
          {
            points: 400,
            question: "From the Latin for 'little key', it's another name for the collarbone",
            answer: "What is a clavicle?",
            revealed: false,
          },
          {
            points: 600,
            question: "It's the junction between neurons; let's hope yours are firing now",
            answer: "What is a synapse?",
            revealed: false,
          },
          {
            points: 800,
            question: "Swallowing or yawning can equalize the pressure in this, also called the auditory tube",
            answer: "What is a Eustachian tube?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "These two ligaments, one posterior & one anterior, stabilize the knee & get their name from the fact that they cross in a 'X' shape",
            answer: "What are the cruciate ligaments?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question: "Trichophilus welckeri algae grow in the fur of this slow arboreal mammal, giving it a green tint",
            answer: "What is a sloth?",
            revealed: false,
          },
          {
            points: 400,
            question: "In 1846 Joseph Leidy found & identified in this farm animal Trichina spiralis, a parasite that can be transmitted to humans",
            answer: "What is a pig?",
            revealed: false,
          },
          {
            points: 600,
            question:
              "The giant shipworm comes out of its shell, & the bacteria inside allow it to digest the sulfur compound in the mud around it; it's not actually a worm, but from this shelled phylum",
            answer: "What is a mollusk?",
            revealed: false,
          },
          {
            points: 800,
            question: "There were more than 200 million live views online during the 16-month pregnancy of April, one of these",
            answer: "What is a giraffe?",
            revealed: false,
          },
          {
            points: 1000,
            question: "In 2017 the oldest this type of aquatic mammal in captivity died at age 69 in a Florida county of the same name",
            answer: "What is a manatee?",
            revealed: false,
          },
        ],
        [
          {
            points: 200,
            question: "This bumbling boss is known for, among other things, his quote “You miss 100% of the shots you don't take- Wayne Gretzky.”",
            answer: "Who is Michael Scott?",
            revealed: false,
          },
          {
            points: 400,
            question:
              "Real name Jacques Bermon Webster, this rapper faced controversy after ten people died at his Astroworld Festival performance in 2021.",
            answer: "Who is Travis Scott?",
            revealed: false,
          },
          {
            points: 600,
            question: "This Avenger made his movie debut in 2015's Ant-Man, but in the comics, he took over from his predecessor Hank Pym in 1979.",
            answer: "Who is Scott Lang?",
            revealed: false,
          },
          {
            points: 800,
            question: "This titular comic book character faces the world for Ramona Flowers in an attempt to continue their relationship.",
            answer: "Who is Scott Pilgrim?",
            revealed: false,
          },
          {
            points: 1000,
            question:
              "This 19th century Romanticist authored the then-popular Waverly Novels, which included Rob Roy and Ivanhoe, but didn't claim authorship until 1827, five years before his death.",
            answer: "Who is Sir Walter Scott?",
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
