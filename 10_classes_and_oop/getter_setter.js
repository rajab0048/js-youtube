class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const Rajab = new User("rajab@gmail.com", "abc")
console.log(Rajab.password);
