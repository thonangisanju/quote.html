const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Every moment is a fresh beginning.",
  "Do what you can with all you have, wherever you are.",
  "Start where you are. Use what you have. Do what you can."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
