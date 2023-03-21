


class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
        this.role = 'Intern'
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;