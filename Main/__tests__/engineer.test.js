//bring in intern
const Engineer = require("../lib/engineer");

// test for setters

// variable for github
test("Can set github constructor", () => {
    const testValue = "GitHub Account User"
    const e = new Engineer("Katie", 5, "test@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

// test for getters

// var to get role
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Katie", 4, "test@gmail.com", "GitHub Account User");
    expect(e.getRole()).toBe(testValue);
});

// variable for github
test("Can set github constructor", () => {
    const testValue = "GitHub Account"
    const e = new Engineer("Katie", 5, "test@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});