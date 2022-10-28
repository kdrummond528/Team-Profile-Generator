//bring in intern
const Intern = require("../lib/Intern");

// test for setters

// variable for school
test("Can set school via constructor", () => {
    const testValue = "Full Sail"
    const e = new Intern("Katie", 5, "test@gmail.com", "Full Sail", testValue);
    expect(e.school).toBe(testValue);
});

// test for getters

// var to get role
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Katie", 4, "test@gmail.com", "Full Sail");
    expect(e.getRole()).toBe(testValue);
});

// variable for school
test("Can get school name via getSchool()", () => {
    const testValue = "Full Sail";
    // variable for new Intern(testValue)
    const e = new Intern("Katie", 456, "test@gmail.com", testValue);
    //expect using the getter, and then your to be
    expect(e.getSchool()).toBe(testValue);
});