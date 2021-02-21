const Intern = require('../lib/Intern');

test("Should assign school", () => {
    const testValue = "UCI";
    const e = new Intern("Damon", 8888, "damonburda96@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Should retrieve school from getSchool()", () => {
    const testValue = "UCI";
    const e = new Intern("Damon", 8888, "damonburda96@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("Should retrieve role from getRole()", () => {
    const role = "Intern";
    const e = new Intern("Damon", 8888, "damonburda96@gmail.com", "UCI");
    expect(e.getRole()).toBe(role);
});