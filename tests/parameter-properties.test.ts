describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person = new Person("Otong");
    console.info(person.name);

    person.name = "Ucup";
    console.info(person.name);
  });
});
