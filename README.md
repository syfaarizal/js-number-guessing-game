# 🎮 JavaScript Challenge — Day 4: Number Guessing Game

Part of my personal **Code Sprint 30 – 30 Days of Consistent JavaScript** challenge.  
On day 4, I built a simple interactive game: **Number Guesser**, evolving from a basic version to a more interactive, modular, and user-friendly implementation.

---

## 🎯 Challenge Goals

- Use `Math.random()` to generate random numbers
- Implement `while` loops and `if/else` conditions
- Structure program logic that interacts directly with users
- Improve input validation and flow control skills
- Understand different expression types and user feedback flows

---

## 💻 Program Description

This program asks users to guess a randomly generated secret number:

1. User selects difficulty: **normal (1–10)** or **hard (1–50)**
2. User guesses numbers until correct
3. Program provides feedback: *"Too low" / "Too high"*
4. On success, displays congratulatory message + number of attempts
5. Includes a scoring system based on user performance

---

## 🧠 Implemented Features

- User input via `prompt()`
- Difficulty selection with `confirm()`
- Random number generation with `Math.floor(Math.random() * max) + 1`
- Number input validation using `isNaN()`
- Game loop using `while` until correct guess
- Performance rating based on attempt count
- User-friendly output with emojis 😄
- In-depth explanation of data types and expressions (ternary, function expression, complex expression)

---

## 🧪 Sample Output

<pre><code>
I'm thinking of a number between 1 and 10. Take a guess!
Your guess: 4
Too low 😅

Your guess: 8
Too high 😅

Your guess: 6
🎉 Congratulations! You guessed correctly in 3 attempts.
🔥 Pro move! You guessed it super fast.
</code></pre>

For invalid input:

<pre><code>Hmm? Please enter a number 😄</code></pre>

---

## 🔧 Bonus Challenges Implemented

| Additional Feature         | Status |
|-------------------------|--------|
| Number input validation     | ✅      |
| Hard mode (1–50)  | ✅      |
| Performance scoring | ✅      |
| Dynamic prompt (range)  | ✅      |
| Complex expression refactor | ✅  |

---

## 🔍 Personal Insights

Initially, I made several mistakes like using the wrong assignment operator (`:` instead of `=`), logic ordering errors, and uncalled functions. Through debugging, I learned:

- Difference between *function declaration* and *function call*
- Using `confirm()` for user choices
- Constructing *ternary* and *complex expression*
- When to modularize code vs. keeping simple structures

This game wasn't just logic practice, but a reminder that **"small mistakes can become big lessons."**

---

## 📌 Author

Made with clarity & curiosity by  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> This challenge proved that logic, UX, and interaction can unite in lines of code.  
> Let’s go to [Day 5 → Creative Looping & Output](https://github.com/syfaarizal/js-looping-name) 🔁
