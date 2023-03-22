const Intern = require('../lib/Intern')

describe('Intern', () => {
    it('should create an object with a name, id, email, and school', () => {
        const intern = new Intern('John', 1, 'john@test.com', 'schoolName');

        expect(intern.name).toEqual('John');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('john@test.com');
        expect(intern.school).toEqual('schoolName')
    })   
})