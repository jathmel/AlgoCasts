// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((ch, idx) => ch === str[str.length - idx - 1])
}

module.exports = palindrome;

// Alternate Solution
// function palindrome(str) {
//     reversedStr = str.split('').reverse().join('')

//     return str === reversedStr
// }