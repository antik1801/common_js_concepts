## Summery - module 37
<li>closer function().</li>
<li>Arguments.</li>
<li>types of.</li>
<li>undefined ways.</li>
<li>truthy falsy values.</li>
 
```
const parentFunction = () =>{
    let counter = 0;
    return function(){
        counter ++;
    }
}

const callParent = parentFunction();
console.log(callParent());
```