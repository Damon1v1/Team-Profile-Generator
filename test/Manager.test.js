const Manager = require('../lib/Manager');

test("Should assign office number", () => {
    const office = 8;
    const e = new Manager("Damon", 8888, "damonburda96@gmail.com", office);
    expect(e.officeNumber).toBe(office);
});

test("Should retrieve office number from getOfficeNumber", () => {
    const office = 8;
    const e = new Manager("Damon", 8888, "damonburda96@gmail.com", office);
    expect(e.getOfficeNumber()).toBe(office);
});

test("Should retireve 'Manager' from getRole()", () => {
    const role = "Manager";
    const e = new Manager("Damon", 8888, "damonburda96@gmail.com", 8);
    expect(e.getRole()).toBe(role);
});