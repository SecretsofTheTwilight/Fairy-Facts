const fs = require('fs');

const fetchRandomFact = () => {
  fs.readFile('fairyfacts.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error("Error reading fairy facts:", err);
      return;
    }

    const factsArray = data.split('\n');
    const randomIndex = Math.floor(Math.random() * factsArray.length);
    const randomFact = factsArray[randomIndex];

    console.log(randomFact); 
  });
};

fetchRandomFact(); // Call the function to get your fact
