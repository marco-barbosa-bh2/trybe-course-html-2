const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  //s = [2, 5, 7]; // would be invalid

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  return s; //works fine
  // Only change code above this line
}
console.log(editInPlace());
