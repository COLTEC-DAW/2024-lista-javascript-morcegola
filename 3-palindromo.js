function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, ''); 
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  var userInput = prompt('Digite uma palavra:');
  
  if (userInput !== null) {
    if (palindrome(userInput)) {
      alert(`"${userInput}" é um palíndromo.`);
    } else {
      alert(`"${userInput}" não é um palíndromo.`);
    }
  }
  