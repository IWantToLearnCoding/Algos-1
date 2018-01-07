// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// #2 solution
	// const splittedString = str.split('');
	// let result = '';
	// splittedString.forEach((letter, index) => {
	// 	if (!index || splittedString[index - 1] === ' ') {
	// 		result += letter.toUpperCase();
	// 	} else {
	// 		result += letter;
	// 	}
	// });
	// return result;

	// #3
	const splittedString = str.split('');
	return splittedString.reduce((result, letter, index) => {
		if (!index || splittedString[index - 1] === ' ') {
			return (result += letter.toUpperCase());
		} else {
			return (result += letter);
		}
	}, '');
}

module.exports = capitalize;
