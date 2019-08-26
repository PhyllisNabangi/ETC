let a = 2, b =4, c = 9;

//logical AND (&&) operator
if (a % 2 === 0 && b % 2 === 0) {
    console.log(`a and b are even numbers`); //Its printed because all the conditions are true
}

if (a % 2 === 0 && c % 2 === 0) {
    console.log(`a and c are even numbers`);  //won't be printed because the result is falsy
}


// logical OR (||) operator
if (a % 2 === 1 || c % 2 === 1) {
    console.log(`a and c are odd numbers`);  //its printed because c is true
}


//logical NOT (!) operator
console.log(!true); //The output is false





