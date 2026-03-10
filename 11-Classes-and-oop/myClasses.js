class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;  // fixed typo: passowrd -> password
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("muqtasid", "muqtasid@gmail.com", "123");  // User not user

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Behind the scenes

function UserFunc(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

UserFunc.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

UserFunc.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`;
};

const tea = new UserFunc("muqtasid", "muqtasid@gmail.com", "123");  // UserFunc not user

console.log(tea.encryptPassword());
console.log(tea.changeUsername());