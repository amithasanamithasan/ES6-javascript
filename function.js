const sum=add (5,6);
function add(num1, num2){
    const result=num1+num2;
    console.log(num1,num2,result);
    return result;
}
// out put:---> 5 6 11

// without number 
const sum1= add();

function add(num1,num2){
    const result=num1+num2;
    console.log(num1,num2,result);
    return result;
}
// output ---->  undefined undefined NaN

// with one paramiter argument one value provied
 const sum3=add(10);
 function add(num1,num2){
    const result=num1+num2;
    console.log(num1,num2,result);
    return result;
 }
//  output ---->10 undefined NaN


// emty string

const amit=('hasan', '');

function amit(num1,num2){
    const result =num1+' '+num2;
    console.log(num1,num2);
    return result;
}

