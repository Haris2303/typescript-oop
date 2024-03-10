describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Employee {}

  it("should support", () => {
    const employee = new Employee("Ucup");
    console.info(employee.name);

    const manager = new Manager("Otong");
    console.info(manager.name);

    const director = new Director("Asep");
    console.info(director.name);
  });
});
