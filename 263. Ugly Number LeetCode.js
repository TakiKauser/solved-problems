/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    
    const array = [2, 3, 5];
    
    if(n <= 0){
        return false;
    }
    else{
        for(let i = 0; i < array.length; i++){
            while(n % array[i] == 0){
                n = Math.floor(n / array[i]); 
            }
            if(n==1){
                return true;
            }
        }
        return false;
    }
};