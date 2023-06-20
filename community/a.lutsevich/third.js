// First task
let login = prompt("Please enter your login");

switch (login) {
  case "admin":
    console.log("You can do everything");
    break;
  case "user":
    console.log("Hello user");
    break;
  case null:
    console.log("Bye");
    break;
  default:
    console.log("I don't know who you are");
    break;
}
