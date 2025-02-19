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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
var person = {
    name: "patel",
    age: 21,
    role: Role.ADMIN
};
// Correct way to compare enum values
if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else {
    console.log("Author");
}
function combine(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 + num2); // ✅ Addition for numbers
    }
    else {
        console.log(num1.toString() + num2.toString()); // ✅ String concatenation
    }
}
var user = {
    name: "Patel",
    skills: ["React"]
};
// console.log(user.skills);
// console.log(typeof user.skills); // Output: "object"
// fucntion kif typescript 
function greet(user) {
    console.log("hi i am ".concat(user.name));
}
greet(user);
