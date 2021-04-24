for (var i = 1; i < 100; i++) {
  //I use two conditions in the if-statement to determine if it should print “Fizz Buzz”. We use a double ampersand, which means both conditions must be true.
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz Buzz');
  }
  // If the number is dividable by 3, we print out “Fizz”
  if ( i % 3 === 0) {
    console.log('Fizz');
  }
  //Else, if the number is dividable by 5, we print out “Buzz”.
  else if ( i % 5 === 0) {
    console.log('Buzz');
  }
  //If none of those two conditions are met, we will enter the last else block and print out the actual number.
  else {
      console.log(i);
  }
}