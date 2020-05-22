function likes(names) {
  let message = '';
  if (names.length == 0) {
    message = 'no one likes this';
  } else if (names.length == 1) {
    message = `${names[0]} likes this`;
  } else if (names.length == 2) {
    message = `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    message = `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
  }
  return message;
}

console.log(likes([]));
console.log(likes(['Lucas']));
console.log(likes(['Lucas', 'Rivolta']));
console.log(likes(['Lucas', 'Rivolta', 'Julia']));
console.log(likes(['Lucas', 'Rivolta', 'Amil','Xulia']));