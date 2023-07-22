const questions = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Paris", "Berlin", "Makkah"],
    correct_answer: 1,
    id: crypto.randomUUID(),
  },
  {
    question: "What is the capital of the United States?",
    answers: ["Washington, D.C.", "New York City", "Riyadh", "Los Angeles"],
    correct_answer: 0,
    id: crypto.randomUUID(),
  },
  {
    question: "How many continents are there in the world?",
    answers: [8, 9, 11, 7],
    correct_answer: 3,
    id: crypto.randomUUID(),
  },
  {
    question: "What is the name of the current president of the United States?",
    answers: ["Joe Biden", "Donald Trump", "MBS", "Barack Obama"],
    correct_answer: 0,
    id: crypto.randomUUID(),
  },
  {
    question: "What is the name of the superhero in the movie Spider-Man?",
    answers: [
      "Peter Parker",
      "Spider-Man",
      "The Revenant",
      "The Amazing Spider-Man",
    ],
    correct_answer: 1,
    id: crypto.randomUUID(),
  },
  {
    question: "What is JavaScript?",
    answers: [
      "it is a game",
      "it is a place",
      "just pass",
      "It is a programming language",
    ],
    correct_answer: 3,
    id: crypto.randomUUID(),
  },
];
export default questions;
