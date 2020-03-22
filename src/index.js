const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {

  let str = '';
  for (let i = 0; i < expr.length; i += 10) {
    //Делим на слова
    let word = expr.slice(i, i + 10);
    if (word === '**********') {
      str = str + ' ';
    } else {
      let letter = '';
      for (let j = 0; j < word.length; j += 2) {
        //Делим слова по 2 символа
        let sym = word.slice(j, j + 2);
        if (sym === '11') {
          letter = letter + '-';
        } else if (sym === '10') {
          letter = letter + '.';
        }
      }
      str = str + MORSE_TABLE[letter];
    }
  }
  return str;
}

module.exports = {
  decode
};