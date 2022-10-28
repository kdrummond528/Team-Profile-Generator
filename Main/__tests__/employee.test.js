//to bring in employee
const Employee = require("../lib/employee");

describe("Employee", () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    });

    // tests for setters 

    //var for name
    test("Can set name via constructor arguments", () => {
        const name = "Karina";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    // var for id number
    test("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Katie", testValue);
        expect(e.id).toBe(testValue);
    });

    // var for email
    test("Can set email via constructor argument", () => {
        const testValue = "test@gmail.com";
        const e = new Employee("Katie", 28, testValue);
        expect(e.email).toBe(testValue);
    });

    // test for getters

    // var for name
    describe("getName", () => {
        test("Can get name via getName()", () => {
            const testValue = "Karina";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });

    // var for id number
    describe("getId", () => {
        test("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Katie", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });

    // var for email
    describe("getEmail", () => {
        test("Can get email via getEmail()", () => {
            const testValue = "test@gmail.com";
            const e = new Employee("Katie", 28, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    // var for role
    describe("getRole", () => {
        test("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Karina", 5, "test@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });

});