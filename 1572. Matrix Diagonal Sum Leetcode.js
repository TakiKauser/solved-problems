/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let counter = 0;
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat.length; j++){
            if((i == j) || (j == (mat.length - 1) - i)) {
                counter += mat[i][j];
            }
        }
    }
    
    return counter;
};