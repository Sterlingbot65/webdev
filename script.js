// 🚀 Part 1: JavaScript Basics
// Variable declaration, user input, conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:"); // Capture user input
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "❌ You are under 18.";
  } else {
    document.getElementById("ageResult").textContent = "⚠️ Invalid age entered.";
  }
});

// ❤️ Part 2: Functions
// Reusable function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Another function: Format greeting message
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

document.getElementById("calcBtn").addEventListener("click", function() {
  let total = calculateTotal(10, 3); // Example: 10 * 3 = 30
  document.getElementById("totalResult").textContent = `Total: $${total}`;
  console.log(greetUser("Student")); // Outputs in console
});

// 🔁 Part 3: Loops
// Example 1: for loop
function generateNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
}

// Example 2: while loop - simple countdown in console
function countdown(start) {
  while (start > 0) {
    console.log("Countdown: " + start);
    start--;
  }
}

document.getElementById("loopBtn").addEventListener("click", function() {
  generateNumbers();
  countdown(5);
});

// 🌐 Part 4: DOM Manipulation
// Example 1: Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Add new list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New item added!";
  list.appendChild(newItem);
});

// Example 3: Change content dynamically
document.getElementById("toggleText").addEventListener("mouseover", function() {
  this.textContent = "✨ You hovered over me!";
});
document.getElementById("toggleText").addEventListener("mouseout", function() {
  this.textContent = "Click the button to highlight me!";
});
