// testing with Manager constructor 
const Manager = require('../lib/Manager');

// Will test new container that includes employee inherited information plus office  number

test("creates a new manager", () => {
    const manager = new Manager('Jorge', 92593, 'jorgegarit@gmail.com', 28);

    // expected manager name
    expect(manager.name).toEqual(expect.any(String));
    // expected manager id
    expect(manager.id).toEqual(expect.any(Number));
    // expected manager email
    expect(manager.email).toEqual(expect.any(String));
    // expected manager office number
    expect(manager.officeNumber).toEqual(expect.any(Number));
});