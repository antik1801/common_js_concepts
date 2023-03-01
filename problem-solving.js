/*
1) If I write []==true,will it show true or false? Check it out.
*/
const array = [];
/*
if (true === "true") {
    console.log('inside is statement')
} else {
    console.log('inside else statement')
}
*/
const check = param =>{
    if (isNaN(param)) {
        console.log('inside if statement')
    } else {
        console.log('inside else statement')
    }
}
// check("26a");

let storeFalsyValue = true;
/*
if(!storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}
*/

// problem 3 


const arrow = (a,b,c) =>{
    if (c==='add') { return a+b;  }
    else if (c==='substract') { return a-b;  }
    else if (c==='multiply') { return a*b;  }
    else if (c==='divide') { return a/b; }
    else if(c==='modulus'){ return a%b }
}
const result = arrow(10,5,"modulus")
console.log(result);
if (undefined) {
    console.log(true);
} else {
    console.log(false);
}