// Create a function called myGreet
function myGreet(name) {
    return "Hello, " + name + "!";
  }//the function myGreet ask for the name and returns "Hello, name!"

console.log(myGreet("Joaquin"));

// Create a function called getCircumference that returns the circumference of a circle
function getCircumference(diameter) {
  const pi = 3.14159;
  return pi * diameter;
}
//the function getCircumference ask for the diameter and returns the circumference
console.log(getCircumference(10));  // Should output approximately 31.4159

// Create a function called whosOnFirst
function whosOnFirst() {
    console.log("Who's on first?");

    whatonfirst();
    console.log("What on first?");
}
//the function whosOnFirst ask for the name and returns "Who's on first?"
function whatonfirst() {
    console.log("No! I ask who's on first!");
}
  

  // Example usage
  whosOnFirst();
  