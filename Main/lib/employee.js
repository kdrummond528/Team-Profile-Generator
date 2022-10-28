class Employee {

    constructor(name, id, email) {
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
        return "Employee";
    }

}

module.exports = Employee;