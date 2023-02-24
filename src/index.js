
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix.length == 0) return newArr;
    else if (i % 2 == 0) {
      newArr.push(...matrix[i]);
    } else {
      newArr.push(...matrix[i].reverse());
    }
  }
  return newArr;
}
