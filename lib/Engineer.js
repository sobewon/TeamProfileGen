


class Engineer {
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        this.role = 'Engineer'
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
    
    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;