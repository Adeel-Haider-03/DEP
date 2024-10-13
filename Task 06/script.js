// Array of quotes
const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The purpose of life is not to be happy. It is to be useful.", author: "Ralph Waldo Emerson" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

// Function to display a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
    document.getElementById("author").textContent = `- ${randomQuote.author}`;
}

// Event listener for button click
document.getElementById("new-quote").addEventListener("click", getRandomQuote);
