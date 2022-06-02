/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    
    let counter = 0;
    let diagonalLength = mat.length;
    
    for(let i = 0; i < diagonalLength; i++){
        counter +=  mat[i][i];
        counter += mat[i][(diagonalLength - 1) - i];
    }
    
    let diagonalMid = Math.floor(diagonalLength / 2);
    
    if((diagonalLength % 2) != 0){
        counter -= mat[diagonalMid][diagonalMid]
    }
    
    return counter;
};