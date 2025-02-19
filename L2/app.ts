
// const person :{
//    firstName:string;
//    age:number;
//    skills:string[];
// } = {
//     firstName:"Patel",
//     age:21,
//     skills:["Reactjs"]
// }

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.skills);


// function add(num1:number, num2:number){
//     console.log(num1+num2);
// }

// add(20,200);

enum Role { ADMIN, USER }

const person = {
    name: "patel",
    age: 21,
    role: Role.ADMIN
};

// Correct way to compare enum values
if (person.role === Role.ADMIN) {
    console.log("Admin");
} else {
    console.log("Author");
}




// type alias'
type Type = number | string;

function combine(num1: Type, num2: Type) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 + num2);  // ✅ Addition for numbers
    } else {
        console.log(num1.toString() + num2.toString());  // ✅ String concatenation
    }
}

// combine(10, 20);    // Output: 30
// combine("Hello", " World");  // Output: "Hello World"
// combine(10, " Apples");  // Output: "10 Apples"




// interface 
interface User{
    name:string,
    skills:string[]
}

const user : User={
    name : "Patel",
    skills:["React"]
}

// console.log(user.skills);
// console.log(typeof user.skills); // Output: "object"



// fucntion of typescript 
function greet(user :User){
    console.log(`hi i am ${user.name}`);
}

greet(user);
