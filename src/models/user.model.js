class User {
    constructor(name, age, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const users = [];
const save = (user) => {
    users.push(user);
    return user;
}


module.exports = {
    User,
    save
};