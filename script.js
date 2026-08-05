const quotes = [
  {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },

  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },

  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: "Steve Jobs",
  },

  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving",
    author: "Albert Einstein",
  },

  {
    quote: "It always seems impossible until it's done",
    author: "Nelson Mandela",
  },

  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams",
    author: "Eleanor Roosevelt",
  },

  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
  },

  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },

  {
    quote: "You miss 100% of the shots you don't take",
    author: "Wayne Gretzky",
  },

  {
    quote: "The secret of getting ahead is getting started",
    author: "Mark Twain",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener("click", generateRandomQuote);
// // Generate a random quote on page load
// generateRandomQuote();
