function fizzBuzz () {
  let MAX_NUMBER = 100;  
  for (let numberToCheck = 1; numberToCheck <= MAX_NUMBER; numberToCheck++) {
    //I use two conditions in the if-statement to determine if it should print “Fizz Buzz”. We use a double ampersand, which means both conditions must be true.
    if ( isDivisibleBy3(numberToCheck) && isDivisibleBy5(numberToCheck)) {
      console.log('Fizz Buzz');
    }
    // If the number is dividable by 3, we print out “Fizz”
    if ( isDivisibleBy3(numberToCheck)) {
      console.log('Fizz');
    }
    //Else, if the number is dividable by 5, we print out “Buzz”.
    else if ( isDivisibleBy5(numberToCheck)) {
      console.log('Buzz');
    }
    //If none of those two conditions are met, we will enter the last else block and print out the actual number.
    else {
        console.log(numberToCheck);
    }
  }
// functions to for checking the number is divisible by 3 or 5.
function isDivisibleBy3(numberToCheck) {
  return numberToCheck % 3 === 0
}

function isDivisibleBy5(numberToCheck) {
  return numberToCheck % 5 === 0
}

}

fizzBuzz ();