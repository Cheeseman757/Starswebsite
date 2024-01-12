<html lang="en">
<head>
 
</head>
<body>
    <header>
        <h1>Welcome to the World of Stars</h1>
    </header>
    <div class="container">
        <h2>Fun Facts about Stars</h2>
        <p>Stars are fascinating celestial objects that have captured human imagination for centuries. Here are some fun facts about them:</p>
        <ul>
            <li>Stars are giant balls of glowing gas, primarily hydrogen and helium.</li>
            <li>Our Sun is a star, and it provides us with heat and light.</li>
            <li>Stars vary in size, temperature, and brightness.</li>
            <li>The color of a star depends on its temperature, with cooler stars appearing red and hotter stars appearing blue.</li>
            <li>Stars go through various stages of life, including formation, main sequence, and eventually, they can explode as supernovas.</li>
        </ul>
        <p>Explore the wonders of the night sky and learn more about the mysteries of the universe.</p>
      <img src="star.jpg">
      <ol>
          <li>
              <a href="https://www.space.com/57-stars-formation-classification-and-constellations.html">Link to more stars info!</a>
          </li>
      </ol>
    <div>
            <!-- Dynamic Components -->
            <h3>Dynamic Components</h3>
            <form id="userInputForm">
                <label for="userName">Enter Your Name:</label>
                <input type="text" id="userName" required>
                <button type="submit">Submit</button>
            </form>
            <div id="dateAndTime"></div>
            <div id="quoteOfTheDay"></div>
        </div>
    </div>
    <script>
        // JavaScript code for dynamic components
        // (You can place this in an external script.js file)
        const userInputForm = document.getElementById("userInputForm");
        const dateAndTime = document.getElementById("dateAndTime");
        const quoteOfTheDay = document.getElementById("quoteOfTheDay");

        // Form submission handler
        userInputForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const userName = document.getElementById("userName").value;
            alert(`Hello, ${userName}!`);
        });

        // Update date and time
        function updateDateTime() {
            const now = new Date();
            dateAndTime.innerText = now.toLocaleString();
        }
        setInterval(updateDateTime, 1000); // Update every second

        // Change the quote of the day (sample quotes)
        const quotes = [
            "The universe is full of stars waiting to be discovered.",
            "Look up at the stars and not down at your feet.",
            "Stars can't shine without darkness.",
        ];
        function updateQuoteOfTheDay() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteOfTheDay.innerText = `"${quotes[randomIndex]}"`;
        }
        updateQuoteOfTheDay(); // Initial quote
        setInterval(updateQuoteOfTheDay, 10000); // Change every 10 seconds
    </script>
 
</body>
</html>       
   
