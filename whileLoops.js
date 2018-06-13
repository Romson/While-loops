/* For loops version: https://github.com/Romson/For-loops/blob/master/forLoops.js */
/* As you can see, While loops take more lines of code to achieve the same compared to For loops. */

//Print all numbers between -10 and 19
console.log('Print all numbers between -10 and 19');
var x = -10;

while(x <= 19) {
    console.log(x);
    x += 1
}
//Print all even numbers between 10 and 40
console.log('Print all even numbers between 10 and 40');
var x = 10;

while(x <= 40) {
    console.log(x);
    x += 2;
}
//Print all odd numbers between 300 and 333
console.log('Print all odd numbers between 300 and 333');
var x = 300;

while(x <= 333) {
    if(x % 2 !== 0) {
        console.log(x);
}
    x+=1;
}
//Print all numbers divisible by 5 and 3 between 5 and 50
console.log('Print all numbers divisible by 5 and 3 between 5 and 50');
var x = 5;

while(x <= 50) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log(x);
    }
    x++;
}
