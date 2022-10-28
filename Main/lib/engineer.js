const employee = require("./employee")

class engineer extends employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithubl() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = engineer;