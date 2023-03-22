const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('should create an object with a name, id, email, and office number', () => {
        const manager = new Manager('John', 1, 'john@test.com', 'officeNumber');

        expect(manager.name).toEqual('John');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('john@test.com');
        expect(manager.officeNumber).toEqual('officeNumber')
    })   
})