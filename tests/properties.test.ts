describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const custumer = new Customer(1, "Otong");
    custumer.age = 23;

    console.info(custumer.id);
    console.info(custumer.name);
    console.info(custumer.age);
  });

  it("should can have methods", () => {
    const customer: Customer = new Customer(1, "Ucup");

    customer.sayHello("Otong");
  });
});
