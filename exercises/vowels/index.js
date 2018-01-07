// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
// 	let num = 0;
// 	let checker = ['a', 'e', 'i', 'o', 'u'];
//
// 	for (let char of str.toLowerCase()) {
// 		if (checker.includes(char)) {
// 			num++;
// 		}
// 	}
// 	return num;
// }

// function vowels(str) {
// 	let num = 0;
// 	const splittedString = str.toLowerCase().split('');
// 	splittedString.forEach(elem => {
// 		if (['a', 'e', 'i', 'o', 'u'].indexOf(elem) > -1) {
// 			num += 1;
// 		}
// 	});
// 	return num;
// }
