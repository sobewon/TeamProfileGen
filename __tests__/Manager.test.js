const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('should create an object with a name, id, email, and office number', () => {
        const intern = new Intern('John', 1, 'john@test.com', 'officeNumber');

        expect(intern.name).toEqual('John');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('john@test.com');
        expect(intern.officeNumber).toEqual('officeNumber')
    })   
})