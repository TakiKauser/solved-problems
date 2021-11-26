function processData(input) {
    // my codes are here
    
    // getting input data
    l = input.split('\n\n');
    new_l = []
    splitted_l = l[1].split('\n');
    new_l.push(l[0]);
    new_l.push(l[2]);
    
    // console.log(new_l);
    // console.log(parseInt(new_l[0]));
    // console.log(splitted_l);
    
    // setting variables
    const stringCount = parseInt(new_l[0]);
    const comparedStringLength = (new_l[1]).length;
    let lengthCount = 0;
    let counter = 0;
    
    // processing data
    for(let i = 0; i < stringCount; i++){
        new_l[1].includes(splitted_l[i]) && counter++;
        // lengthCount += (splitted_l[i]).length;
    }
    
    // showing required output
    
    // console.log(lengthCount, comparedStringLength);
    
    (counter === stringCount) ? console.log('Yes\n') : console.log('No\n');
    
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
