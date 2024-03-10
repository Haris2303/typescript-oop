describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const otong = new Employee();
  const ucup = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof otong);
    console.info(typeof ucup);
  });

  it("should support instance of", () => {
    expect(otong instanceof Employee).toBeTruthy();
    expect(otong instanceof Manager).toBeFalsy();

    expect(ucup instanceof Employee).toBeFalsy();
    expect(ucup instanceof Manager).toBeTruthy();
  });
});
