// var : no reason to use var
// let : allow it to reassign
// const: do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);
// output---> 50


let count = 0;
count = count + 10;
console.log(count)

// output--->10

const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 7, 7];
numbers[1] = 55;
numbers.push(8, 9, 65);

console.log(numbers);

// output [23, 55, 23, 12,56,  8,  9, 65 ]

// object 
const student = {
    name: 'moyna pakhi',
    class: 12

}
console.log(student);

// output --->{ name: 'moyna pakhi', class: 12 }


// change object  reassing

let student1={name:'amit',roll:14}
 student1={name:'amit hasanfaysal'}
 console.log(student1);

// output { name: 'amit hasanfaysal' }