// ES2015

class Person {
    // Class logic
    constructor(name, age) {
        console.log('Creaed');
        this.name = name;
        this.age = age;
    }
}

var info = new Person('hoon', 27);


// inheritance 

var user = { name: 'hoon', age: 27 };
var admin = {};

// prototype, The admin can use user property
admin.__proto__ = user;

admin.age = 27 

// admin result 
// admin {
//     age: 27
//     __proto__ : {
//         name: 'hoon',
//         age: 27,
//     }
// }