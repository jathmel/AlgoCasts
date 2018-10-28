// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversedStr, ch) => ch + reversedStr, '')
}

module.exports = reverse;

// Solution 1
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// solution 2
// function reverse(str) {
//     reversedStr = ''
//     // for(let i = 0; i < str.length; i++){
//     //     reversedStr = str[i] + reversedStr
//     // }

//     // alternate for loop
//     for(let ch of str){
//         reversedStr = ch + reversedStr
//     }

//     return reversedStr
// }