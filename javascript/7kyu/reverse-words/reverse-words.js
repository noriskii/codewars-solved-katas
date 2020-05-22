function reverseWords(str) {
    return str.split(' ').map(item => item.split('').reverse('').join('')).join(' ');
    /*
   let newPhrase = words.map((item, index, arr) => {
            return item.length >= 5 ? item.split('').reverse().join('') : item;
    });
    */
}

console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));
