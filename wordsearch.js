const transpose = function(matrix) {
  // Put your solution here
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      // console.log(matrix[j][i]);
      row.push(matrix[j][i]);
      //push to sub array
    }
    transposed.push(row);
    // return transposed;
    //push to main array
  }
  // console.log("length is:", transposed.length);
  return transposed;
};

const wordSearch = (letters, word) => {
  let status = false;
  if (letters.length === 0) {
    return status = undefined;
  }
    
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
            
      return true;
    }
  }
  //transpose words into new array and run same includes method to search for word
  let transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(rs => rs.join(''));

  for (const r of verticalJoin) {
    if (r.includes(word)) {

      return true;
    }
  }
  return status;
};

module.exports = wordSearch;