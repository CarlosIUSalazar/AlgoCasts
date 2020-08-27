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
    return str.split("").reverse().join("")
}

reverse('abcd')

module.exports = reverse;
