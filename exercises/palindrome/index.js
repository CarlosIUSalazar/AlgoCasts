// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    //SOLUTION 1
    // let reversed = ''
    // for (let char of str){
    //     reversed = char + reversed;
    // }

    // if (str === reversed){
    //     return true;
    // } else {
    //     return false;
    // }

    //SOLUTION 2
    // let reversed = str.split('').reverse().join('')
    // return str === reversed;

    //SOUTION 3 (Not optimal cuz you're using twice the work)
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    });

}

module.exports = palindrome;
