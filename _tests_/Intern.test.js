// testing with Intern constructor 
const Intern = require('../lib/Intern');

// Will test new container that includes employee inherited information plus git school

test("creates a new intern", () => {
    const intern = new Intern('Jorge', 92593, 'jorgegarit@gmail.com', "University of Florida");

    // expected intern name
    expect(intern.name).toEqual(expect.any(String));
    // expected intern id
    expect(intern.id).toEqual(expect.any(Number));
    // expected intern email
    expect(intern.email).toEqual(expect.any(String));
    // expected intern school
    expect(intern.school).toEqual(expect.any(String));
});