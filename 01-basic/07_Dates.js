// Dates



let myDate = new Date()
//console.log(myDate.toUTCString());
//console.log(typeof myDate); // Date is an Object DataType

//let myCreateDate = new Date(2024, 8, 14 )
//let myCreateDate = new Date(2024, 8, 14, 12, 00)
//let myCreateDate = new Date("2024-09-14")
let myCreateDate = new Date("09-14-2024")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());