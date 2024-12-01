/* JavaScript import, export */
// import { apiKey, abc as a } from './util.js';
// import apiKey2 from "./util.js";

import * as util from "./util.js";

// console.log(apiKey);
// console.log(apiKey2);
// console.log(a);

console.log(util.apiKey);
console.log(util.default);
console.log(util.abc);

/* JavaScript function */
function createGreeting(userName, message = "Hello!") {
    // console.log(userName);
    // console.log(message);
    return "Hi, I am " + userName + " " + message;
}

// greetUser("JH");
// greetUser("Manuel", "Hello, what's up?");
// console.log(createGreeting("JH"));
const greeting1 = createGreeting("JH");
console.log(greeting1);
const greeting2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greeting2);

export default (userName, message) => {
    return userName + message;
}

/* JavaScript object */
const user = {
    name: "JH",
    age: 26,
    greet() {
        console.log("Hello!");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();

/* JavaScript class */
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hi!");
    }
}

const user1 = new User("JH", 26);
console.log(user1);
user1.greet();

/* JavaScript array */
const hobbies = ["Sports", "Cooking", "Coding"];

hobbies.push("Working");
console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//     return item === "Sports";
// });

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

/* JavaScript 구조분해할당 */ 
// const userNameData = ["Ban", "JH"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
// const [firstName, lastName] = ["Ban", "JH"];
// console.log(firstName);
// console.log(lastName);

// const user2 = {
//     name: "JH",
//     age: 26
// };
// const name = user2.name;
// const age = user2.age;

const {name: username, age} = {
    name: "JH",
    age: 26
};

console.log(username);
console.log(age);

/* JavaScript 스프레드문법 */
const hobbies2 = ["Sports", "Cooking"];
const user2 = {
    name: "JH",
    age: 26
};

const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies2, ...newHobbies];
console.log(mergedHobbies);

const extendedUser = {
    isAdmin: true,
    ...user2
}
console.log(extendedUser);

/* JavaScript 특징(1) 함수를 다른 함수에 값으로 전달 가능*/
function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More time out...");
}, 4000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi"));

/*  */
