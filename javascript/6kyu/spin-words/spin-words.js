function spinWords(phrase) {
	let words = phrase.split(' ');
	let newPhrase = words.map((item) => {
		return item.length >= 5 ? item.split('').reverse().join('') : item;
	});
	return newPhrase.join(' ');
}

console.log(spinWords("Hey fellow a in warriors"));
