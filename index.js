
let hardMode = confirm("Want to play in hard mode? (Numbers 1–50)");
let rangeText = hardMode ? "1 and 50" : "1 and 10";
let randomNumber = Math.floor(Math.random() * (hardMode ? 50 : 10)) + 1;
let attempt = 0;
let repeat = true;

while(repeat) {
  const userInput = prompt(`I'm thinking of a number between ${rangeText}. Take a guess!`);
  attempt++;

  const guess = parseInt(userInput);

  if (isNaN(guess)) {
    console.log("Eh? Please enter a number 😄");
  } else {
    if (guess < randomNumber) {
      console.log("Too small 😅");
    } else if (guess > randomNumber) {
      console.log("Too big 😅");
    } else {
      console.log(`🎉 Congratulations! You guessed the number correctly in ${attempt} attempts.`);

      if(attempt <= 3) {
        console.log("🔥 Pro move! You guessed it super fast.");
      } else if (attempt <= 6) {
        console.log("👍 Not bad! But you can do better.");
      } else {
        console.log("😅 Well, needs more practice. Keep trying!");
      }

      repeat = false;
    }
  }
}
          