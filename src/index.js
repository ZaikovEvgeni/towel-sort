
// You should implement your task here.

function towelsort(matrix) {
  
}




module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length == 0) {
    return [];
  }
  let newArr = [];
  let count = 0;
 
 for( let i = 0; i < matrix.length; i++) {
   ++count;
   if(count % 2 == 0) {
    matrix[i].reverse();
  }
   for(let l = 0; l < matrix[i].length; l++) {
    
     newArr.push(matrix[i][l])
   }
 }
  return newArr;
}
