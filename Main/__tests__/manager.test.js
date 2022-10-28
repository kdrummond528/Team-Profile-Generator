//bring in intern
const manager = require("../lib/manager");

// test for setters

// variable for officeNumber
test("Can set officeNumber constructor", () => {
    const testValue = "1234567890"
    const e = new manager("Katie", 5, "test@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

// test for getters

// var to get role
test("getRole() should return \"manager\"", () => {
    const testValue = "Manager";
    const e = new manager("Katie", 5, "test@gmail.com", "1234567890");
    expect(e.getRole()).toBe(testValue);
});

// variable for github
test("Can get officeNumber via getOffice()", () => {
    const testValue = 1234567890;
    const e = new manager("Katie", 5, "test@gmail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});