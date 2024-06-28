// if

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 40) {
//     console.log("Temperature is 40 degree");    
// }
// else{
//     console.log("Temperature is greater than 40 degree");
// }

// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }

//     console.log(`User power: ${power}`); this can be use as globally because of var var is a globally variable that's way we cannot use instead we use let 


// shorthand notation

// const balance = 1000

// if (balance > 500) console.log("test"); 
//  this is implicit scope because we cannot use {} this brakets we assume that there is an scope 


// if (balance < 500) {
//     console.log("less than");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const userLoggedInGamail = false
const userLoggedInEmail = true

if (userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}

if (userLoggedInGamail || userLoggedInEmail ){
    console.log("User logged in");
}