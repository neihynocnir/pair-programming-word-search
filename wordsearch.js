const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        } else {
            for (let str of verticalJoin) {
                if (str.includes(word)) {
                    return true;
                }
            }
        }
    }
    return false;
}

const transpose = function(letters) {
    let result = [];
    for (let x = 0; x < letters.length; x ++) {
      for (let y = 0; y < letters[x].length; y++) {
        if (!result[y]) {
          result[y] = [];
        }
        result[y].push(letters[x][y]);
      }
    }
    return result;
  };

module.exports = wordSearch