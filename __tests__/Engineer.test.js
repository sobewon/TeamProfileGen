const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('should create an object with a name, id, email, and gitHub', () => {
        const engineer = new Engineer('John', 1, 'john@test.com', 'johnHub');

        expect(engineer.name).toEqual('John');
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('john@test.com');
        expect(engineer.gitHub).toEqual('johnHub')
    })   
})