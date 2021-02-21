const Engineer = require('../lib/Engineer');

test("Should be able to set GitHub", () => {
    const username = "Damon1v1";
    const e = new Engineer("Damon", 8888, "damonburda96@gmail.com", username);
    expect(e.github).toBe(username);
});

test("Should retrieve github from getGitHub()", () => {
    const username = "Damon1v1";
    const e = new Engineer("Damon", 8888, "damonburda96@gmail.com", username);
    expect(e.getGitHub()).toBe(username);
});

test("Should retrieve role from getRole()", () => {
    const role = "Engineer";
    const e = new Engineer("Damon", 8888, "damonburda96@gmail.com", role);
    expect(e.getRole()).toBe(role);
});