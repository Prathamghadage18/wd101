/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
    let nameArray = name.split(" ");
    let lengthOfArray = nameArray.length;
    let A,B;
    if(lengthOfArray === 1){
      A=name.substr(0,2);
      B = A.toUpperCase();
      return B
    }
    if(lengthOfArray === 2){
      A=nameArray[0].substr(0,1)+ nameArray[1].substr(0,1);
      B=A.toUpperCase();
      return B;
    }
    if(lengthOfArray >2){
      A = nameArray[0].substr(0,1)+nameArray[lengthOfArray-1].substr(0,1);
      B=A.toUpperCase();
      return B;
    }
  
  };
  
  module.exports = createInitialsFromName;
  