/*
Truthy:
1. 
Falsy:
1. false

any strings will be truthy except ''= empty string.
undefined is falsy value.
null is a falsy value.
{} is truthy object
[] is a truthy array.

check the truthy falsy value.
always use === 
*/

const x = "false";
if (x) {
    console.log(true);
} else {
    console.log(false)
}
const y = null;

if (!y) {
 console.log('inside if value false', y);   
} 
