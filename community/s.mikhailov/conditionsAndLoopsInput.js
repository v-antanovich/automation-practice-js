// Import the readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and wait for user input
rl.question('Кто ты? ', (name) => {
  // Handle the user input
  if (name == "админ") {
    console.log("Ты можешь все")
  } else if (name == "юзер") {
    console.log("Привет юзер")
  } else if (name == "отмена") {
    console.log("Пока")
  } else {
    console.log(`Я тебя не знаю, ${name}`)
  };

  // Close the readline interface
  rl.close();
});
