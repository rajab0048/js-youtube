class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Rajab = new User("Rajab")
// console.log(Rajab.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
 
const iphone = new Teacher("Rajab", "iphone@gmail.com")
iphone.logMe()
console.log(iphone.createId());

