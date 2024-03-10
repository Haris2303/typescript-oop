describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello vice president ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello vice president ${vp.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  it("should support", () => {
    let employee: Employee = new Employee("Otong");
    console.info(employee);

    employee = new Manager("Otong");
    console.info(employee);

    employee = new VicePresident("Otong");
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Otong"));
    sayHello(new Manager("Ucup"));
    sayHello(new VicePresident("Asep"));
  });

  it("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Otong"));
    sayHelloWrong(new Manager("Ucup"));
    sayHelloWrong(new VicePresident("Asep"));
  });
});
