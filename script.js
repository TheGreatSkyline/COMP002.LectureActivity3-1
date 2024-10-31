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
  

//"Who's on first?" (from the whosOnFirst function)

// The whosOnFirst function is called, and the first console.log statement inside it is executed.

//"No! I ask who's on first!" (from the whatonfirst function called inside whosOnFirst)

// The whatonfirst function is then called from within whosOnFirst, which executes its console.log statement.

//"What on first?" (from the whosOnFirst function, after whatonfirst is called)

// After whatonfirst finishes executing, the control returns to whosOnFirst, and the final console.log statement inside whosOnFirst is executed.


// Create a stackOverflow function
function stackOverflow() {
    console.log("Stack overflow!");
    stackOverflow();
  }
  //the function stackOverflow ask for the name and returns "Stack overflow!"
  stackOverflow();





