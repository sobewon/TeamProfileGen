const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('should create an object with a name, id, and email', () => {
        const employee = new Employee('John', 1, 'john@test.com');

        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('john@test.com');
    })   
})