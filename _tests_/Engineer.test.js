// testing with engineer constructor
const Engineer = require('../lib/Engineer');

// Will test new container that includes employye inherited information plus git hub username

test("creates a new engineer", () => {
    const engineer = new Engineer('Jorge', 92593, 'jorgegarit@gmail.com', "jorgegarit");

    // expected engineer name
    expect(engineer.name).toEqual(expect.any(String));
    // expected engineer id
    expect(engineer.id).toEqual(expect.any(Number));
    // expected engineer email
    expect(engineer.email).toEqual(expect.any(String));
    // expected engineer github username
    expect(engineer.github).toEqual(expect.any(String));
})