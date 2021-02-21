const Intern = require('../lib/Intern');

test("Should assign school", () => {
    const uni = "UCI";
    const e = new Intern("Damon", 8888, "damonburda96@gmail.com", uni);
    expect(e.school).toBe(uni);
});

test("Should retrieve school from getSchool()", () => {
    const uni = "UCI";
    const e = new Intern("Damon", 8888, "damonburda96@gmail.com", uni);
    expect(e.getSchool()).toBe(uni);
});

test("Should retrieve role from getRole()", () => {
    const role = "Intern";
    const e = new Intern("Damon", 8888, "damonburda96@gmail.com", "UCI");
    expect(e.getRole()).toBe(role);
});