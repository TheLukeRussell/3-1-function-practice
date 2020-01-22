(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

  // let max = (num1, num2) => {
  // if (num1 > num2) {
  //   console.log(`${num1} is larger than ${num2}`);
  // } else {
  //   console.log(`${num1} is smaller than ${num2}`);
  // }
  // return;
  // }
  // max(25, 37);

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
  // let maxOfThree = (num1, num2, num3) => {
  //   let max = Math.max(num1, num2, num3);
  //   return max;
  // }
  // console.log(maxOfThree(29,4,52));

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let isVowel = (char) => {
    for (let i = 0; i <= vowels.length; i++) {
      if (char !== vowels[i]) {
        continue;
      }
        return true;
      }
        return false;
    }
  console.log(isVowel('a'));

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  //
  // let translate = (char) => {
  //   let vowel = ['a', 'e', 'i', 'o', 'u'];
  //   let array = char.toLowerCase();
  //   let y = '';
  // for (let i = 0; i < array.length; i++) {
  //   let current = array.charAt(i);
  //   if (vowel.indexOf(current) !== -1) {
  //     y = (y + (current));
  //   } else {
  //     y = (y + (current + "o" + current));
  // }
  // }
  // return y;
  // }
  // console.log(translate("this is fun"));

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  //   let sum = (numbers) => {
  //     let result = 0
  //     for (let i = 1; i <= numbers.length; i++) {
  //       result += i;
  //     }
  //     return result;
  //   }
  //   console.log(sum([1,2,3,4]));
  //
  // let multiply = (numbers) => {
  //   let result = 1;
  //   for (let i = 1; i <= numbers.length; i++) {
  //     result *= i
  //   }
  //   return result;
  // }
  // console.log(multiply([1,2,3,4]));

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  //   let reverse = (str) => {
  //   let text = ''
  //   for (let i = str.length - 1; i >= 0; i--) {
  //   text += str[i];
  // }
  //   return text;
  // }
  // console.log(reverse('ratset gaj'));

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  //
  // let findLongestWord = (str) => {
  //   let strSplit = str.split(' ');
  //   let longestWord = '';
  //   for (let i = 0; i < strSplit.length; i++) {
  //     if (strSplit[i].length > longestWord) {
  //       longestWord = strSplit[i].length;
  //     }
  //   }
  //   return longestWord;
  // }
  // console.log(findLongestWord("The astonishingly quick brown fox jumped over the lazy dog"));

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

    // let filterLongWords = (array, integer) => {
    //   let longestWords = [];
    //   for (let i = 0; i < array.length; i++) {
    //     if (array[i].length > integer) {
    //       longestWords[longestWords.length] = array[i];
    //     }
    //   }
    //   return longestWords;
    // }
    //   console.log(filterLongWords(["Mandarin-Oranges", "coconuts", "hello"], 5));


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

// {a:7, b:9, c:6}
//
// console.assert(charFreq('aaabccbcbbcbabbcbababaa').a===7)
//
})();
