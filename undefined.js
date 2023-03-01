/*
8 ways to get undefined
1 . Variable that is not initialized will give you undefined.
2 . Function that has not any return will give you undefined.
3 . Parameter that isn't passed in function gives a undefined.
4 . if only return is written but unclear what needs to return.
5 .
*/

let first;
console.log(first);

function second(a,b){
    const total = a+b;
}
const getTotal = second(25,85);
console.log(getTotal);

function third(a,b,c,d){
    console.log(a,b,c,d);
}
third(5,10);
