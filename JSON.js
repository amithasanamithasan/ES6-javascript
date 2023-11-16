const employe = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545,
    movies :['3iditos','maie hu na']
    

    }

const json =JSON.stringify(employe);
console.log(json);

const obj =JSON.parse(json);
console.log(obj);