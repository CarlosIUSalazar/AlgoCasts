// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // SOLUTION 1
    // let reverse = ''
    // for (let i=str.length-1; i>=0; i--){
    //     reverse = reverse + str[i]
    //     console.log(str[i])
    // }
    // //console.log(reverse)
    // return reverse;

    // SOLUTION 2
    //return str.split("").reverse().join("")

    // SOLUTION 3
    // let reverse = [];
    // for (let character of str) {
    //     reverse.unshift(character)
    // }
    // return reverse.join("")

    //SOLUTION 4
    // let reverse = ''
    // for (let character of str){
    //     reverse = character + reverse;
    // }
    // return reverse;

    //SOLUTION 5
    // return str.split('').reduce((reversed,character) => {
    //     return character + reversed;
    // },'')

    //SOLUTION 6
    return str.split('').reduce((rev,char) => char + rev, '');
}

reverse('abcd')

module.exports = reverse;
