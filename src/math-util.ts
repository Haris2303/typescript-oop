export namespace MathUtil {
  export const PI: number = 3.14;

  export function sum(...values: number[]): number {
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }
}

export namespace Otong {}

export namespace Helper {
  export function sayHello(): void {
    console.info("Hello Helper");
  }
}
