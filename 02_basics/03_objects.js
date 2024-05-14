// objects constructor
// singleton
//object.create

// objects literals

const mySym = Symbol("key1") // interview question

const JsUser = {
    name: "Rajab",
    "full name": "Rajab Ali",
    [mySym]: "myKey1",
    age:  18,
    location: "Lahore",
    email: "rajabmemon6244246@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // using this mehtod to console object
// console.log(JsUser.full name); // error

// console.log( typeof JsUser.mySym); // when you console this is string value not symbol
// right syntax for console is:

// console.log( typeof JsUser[mySym]);

JsUser.email = "rajabali624426@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "rajabmemon624426@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







