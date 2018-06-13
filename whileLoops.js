//
////First Loop (prints every % 4 === 0 nums )
//var x = 1;
//
//while(x <= 20) {
//    if (x % 4 === 0) {
//        console.log(x);
//    }
//    x++;
//}
//
////Infinite loop
//var x = 100;
//
//while(x < 150) {
//    console.log(x + 1);
//    x--;
//}
//

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
var x = 301;

while(x <= 333) {
    console.log(x);
    x += 2;
}

//Print all numbers divisible by 5 and 3 between 5 and 50
console.log('Print all numbers divisible by 5 and 3 between 5 and 50');
var x = 1;

while(x <= 50) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log(x);
    }
    x++;
}