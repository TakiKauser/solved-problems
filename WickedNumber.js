function processData(input) {
    //my codes are here
    
    // getting input
    const inputData = input;
    const inputDataLength = inputData.length - 1;
    // console.log(inputDataLength);
    
    // setting variable
    let digitMatched = 0;
    let consecutive = false;
    let palindrome = false;
    const array = Array(15).fill(0);
    
    // processing data
    
    for(let i = 0; i < inputDataLength; i++){
        if(inputData[0] === inputData[i]){
            digitMatched++;
        }
    
        if (inputData[i] !== inputData[inputDataLength - 1 - i]) {  
            palindrome = false;
        }else{
            palindrome = true;
        }
        // console.log(array[i]);
        // array.push(inputData[i]);
        
    }
    
    for(let i = 1; i < inputDataLength; i++){
        if(inputData[0] == inputData[i]){
            digitMatched++;
        }
        if(((inputData[i - 1] - inputData[i]) === 1) || (inputData[i] - inputData[i - 1]) === 1){
            
            consecutive = true;
        }else{
            consecutive = false;
        }
    }
    
    // showing required output
    
    if(inputData[0] === 0) console.log('Yes');
    
    else if(digitMatched === inputDataLength) console.log('Yes');
    
    else if(consecutive) console.log('Yes');
    
    else if(palindrome) console.log('Yes');
    
    else console.log('No');

};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
