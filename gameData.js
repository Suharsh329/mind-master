// Default game data
const defaultGameData = {
    boards: [
        {
            categories: [
                "History", "Science", "Geography", "Literature", "Sports"
            ],
            questions: [
                // History
                [
                    { points: 100, question: "This document, signed in 1776, declared the United States independent from Great Britain", answer: "Declaration of Independence", revealed: false },
                    { points: 200, question: "This ancient wonder was a lighthouse built by the Ptolemaic Kingdom around 280-247 BC", answer: "Lighthouse of Alexandria", revealed: false },
                    { points: 300, question: "This Roman emperor built a wall across northern Britain", answer: "Hadrian", revealed: false },
                    { points: 400, question: "This medieval English king was known as 'Lionheart'", answer: "Richard I", revealed: false },
                    { points: 500, question: "This treaty ended World War I", answer: "Treaty of Versailles", revealed: false }
                ],
                // Science
                [
                    { points: 100, question: "The chemical symbol 'O' stands for this element", answer: "Oxygen", revealed: false },
                    { points: 200, question: "This force pulls objects toward the center of the Earth", answer: "Gravity", revealed: false },
                    { points: 300, question: "This scientist developed the theory of general relativity", answer: "Albert Einstein", revealed: false },
                    { points: 400, question: "This is the fundamental unit of heredity", answer: "Gene", revealed: false },
                    { points: 500, question: "This subatomic particle has a negative charge", answer: "Electron", revealed: false }
                ],
                // Geography
                [
                    { points: 100, question: "This is the longest river in the world", answer: "Nile", revealed: false },
                    { points: 200, question: "This is the largest ocean on Earth", answer: "Pacific Ocean", revealed: false },
                    { points: 300, question: "This is the capital of Australia", answer: "Canberra", revealed: false },
                    { points: 400, question: "This mountain is the tallest in the world", answer: "Mount Everest", revealed: false },
                    { points: 500, question: "This desert is the largest hot desert in the world", answer: "Sahara", revealed: false }
                ],
                // Literature
                [
                    { points: 100, question: "This author wrote 'Romeo and Juliet'", answer: "William Shakespeare", revealed: false },
                    { points: 200, question: "This novel by Harper Lee features the character Atticus Finch", answer: "To Kill a Mockingbird", revealed: false },
                    { points: 300, question: "This J.R.R. Tolkien book follows Bilbo Baggins on an adventure", answer: "The Hobbit", revealed: false },
                    { points: 400, question: "This Russian author wrote 'War and Peace'", answer: "Leo Tolstoy", revealed: false },
                    { points: 500, question: "This American poet wrote 'The Raven'", answer: "Edgar Allan Poe", revealed: false }
                ],
                // Sports
                [
                    { points: 100, question: "This team sport uses a puck", answer: "Hockey", revealed: false },
                    { points: 200, question: "This race is known as 'The Most Exciting Two Minutes in Sports'", answer: "Kentucky Derby", revealed: false },
                    { points: 300, question: "This sporting event happens every four years", answer: "Olympics", revealed: false },
                    { points: 400, question: "This baseball player was known as 'The Sultan of Swat'", answer: "Babe Ruth", revealed: false },
                    { points: 500, question: "This sport is played on a court with a shuttlecock", answer: "Badminton", revealed: false }
                ]
            ]
        },
        {
            categories: [
                "Movies", "Music", "Food", "Technology", "Animals"
            ],
            questions: [
                // Movies
                [
                    { points: 100, question: "This 1977 film features characters named Luke Skywalker and Darth Vader", answer: "Star Wars", revealed: false },
                    { points: 200, question: "This actor played Jack in the movie 'Titanic'", answer: "Leonardo DiCaprio", revealed: false },
                    { points: 300, question: "This animated Disney film features a character named Simba", answer: "The Lion King", revealed: false },
                    { points: 400, question: "This director made 'Jaws', 'E.T.', and 'Jurassic Park'", answer: "Steven Spielberg", revealed: false },
                    { points: 500, question: "This movie won the Academy Award for Best Picture in 2020", answer: "Parasite", revealed: false }
                ],
                // Music
                [
                    { points: 100, question: "This 'King of Rock and Roll' sang 'Hound Dog' and 'Blue Suede Shoes'", answer: "Elvis Presley", revealed: false },
                    { points: 200, question: "This band from Liverpool had members John, Paul, George, and Ringo", answer: "The Beatles", revealed: false },
                    { points: 300, question: "This Queen song features the lyrics 'Is this the real life? Is this just fantasy?'", answer: "Bohemian Rhapsody", revealed: false },
                    { points: 400, question: "This instrument has 88 keys", answer: "Piano", revealed: false },
                    { points: 500, question: "This composer wrote 'The Four Seasons'", answer: "Antonio Vivaldi", revealed: false }
                ],
                // Food
                [
                    { points: 100, question: "This vegetable makes your eyes water when you cut it", answer: "Onion", revealed: false },
                    { points: 200, question: "This Italian food is made from durum wheat semolina", answer: "Pasta", revealed: false },
                    { points: 300, question: "This fruit has varieties including Granny Smith and Honeycrisp", answer: "Apple", revealed: false },
                    { points: 400, question: "This spice comes from the crocus flower", answer: "Saffron", revealed: false },
                    { points: 500, question: "This Japanese dish consists of vinegared rice, usually with fish or vegetables", answer: "Sushi", revealed: false }
                ],
                // Technology
                [
                    { points: 100, question: "This company makes iPhone and iPad products", answer: "Apple", revealed: false },
                    { points: 200, question: "This programming language is named after a type of coffee", answer: "Java", revealed: false },
                    { points: 300, question: "HTTP stands for this", answer: "Hypertext Transfer Protocol", revealed: false },
                    { points: 400, question: "This social media platform was created by Mark Zuckerberg", answer: "Facebook", revealed: false },
                    { points: 500, question: "This technology uses radio waves to read data stored in tags", answer: "RFID", revealed: false }
                ],
                // Animals
                [
                    { points: 100, question: "This is the fastest land animal", answer: "Cheetah", revealed: false },
                    { points: 200, question: "This flying mammal uses echolocation", answer: "Bat", revealed: false },
                    { points: 300, question: "This marine mammal is known for its playful behavior and intelligence", answer: "Dolphin", revealed: false },
                    { points: 400, question: "This animal's fingerprints are so similar to humans' that they've confused crime scene investigators", answer: "Koala", revealed: false },
                    { points: 500, question: "This bird is known for collecting and decorating its nest with colorful objects", answer: "Bowerbird", revealed: false }
                ]
            ]
        }
    ],
    defaultPlayers: [
        { name: "Player 1", score: 0 },
        { name: "Player 2", score: 0 }
    ]
};

// Export the game data
export { defaultGameData }; 