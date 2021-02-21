const Employee = require("../lib/Employee");

test("Can set a new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can assign employee name", () => {
    const name = "Damon";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can assign employee id", () => {
    const id = 8888;
    const e = new Employee("Damon", id);
    expect(e.id).toBe(id);
});

test("Can assign employee email", () => {
    const email = "damonburda96@gmail.com";
    const e = new Employee("Damon", 8888, email);
    expect(e.email).toBe(email);
});

test("Can retrieve name from getName()", () => {
    const name = "Damon";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("Can retrieve id from getId()", () => {
    const id = 8888;
    const e = new Employee("Damon", id);
    expect(e.getId()).toBe(id);
})

test("Can retrieve email from getEmail", () => {
    const email = "damonburda96@gmail.com";
    const e = new Employee("Damon", 8888, email);
    expect(e.getEmail()).toBe(email);
});

test("'Employee' should be returned", () => {
    const role = "Employee";
    const e = new Employee("Damon", 8888, "damonburda96@gmail.com");
    expect(e.getRole()).toBe("Employee");
})