var string = 'This is midday show with Cheryl Waters';
var urlFriendly = '';

for (var i = 0; i < string.length; i++) {
  if (string[i] === ' ') {
    urlFriendly += '-';
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly);
