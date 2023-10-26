// ES6 arrow function
 const add1=(a,b)=>a+b;

 const sum= add1(12,13);
console.log(sum)
// output 25;


//  multipley ES6 function use
const multiply = (num1, num2) => num1 * num2;

const mul =multiply(3,4);
console.log(mul);
// output 12


// java script ja kortam '
const sum1=add (5,6);

function add(num1, num2){
    const result=num1+num2;
    console.log(result);
    return result;
}
// output 11

const difference = (x, y) => x - y;
const multiply1 = (first, second , third) => first * second * third;

// single parameter or one parameter 
const getAge = (person) => person.age;
const student = { name: 'ananata', age: 45}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13])
console.log(third)

const doubleIt = num => num * 2;

// no parameter
const getPI = () => Math.PI
console.log(getPI())

// large arrow function. if you want to get anything returned from this function. then you have to use the return keyword  
const doMath = (x, y, Z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}