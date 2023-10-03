import calculator from "calculator";
import { faker } from "@faker-js/faker";

describe("calculator tests", () => {
  it("should return result of sum", async () => {
    const n1 = faker.number.int();
    const n2 = faker.number.int();
    const resultInt = calculator.sum(n1, n2);
    expect(resultInt).toBe(n1 + n2);
    const f1 = faker.number.float();
    const f2 = faker.number.float();
    const resultFloat = calculator.sum(f1, f2);
    expect(resultFloat).toBe(f1 + f2);
  });
  
  it("should return result of sub", async () => {
    const n1 = faker.number.int();
    const n2 = faker.number.int();
    const resultInt = calculator.sub(n1, n2);
    expect(resultInt).toBe(n1 - n2);
    const f1 = faker.number.float();
    const f2 = faker.number.float();
    const resultFloat = calculator.sub(f1, f2);
    expect(resultFloat).toBe(f1 - f2);
  });
  
  it("should return result of sub", async () => {
    const n1 = faker.number.int();
    const n2 = faker.number.int();
    const resultInt = calculator.div(n1, n2);
    expect(resultInt).toBe(n1 / n2);
    const f1 = faker.number.float();
    const f2 = faker.number.float();
    const resultFloat = calculator.div(f1, f2);
    expect(resultFloat).toBe(f1 / f2);
    const resultZero = calculator.div(f1, 0);
    expect(resultZero).toBe(0);
  });
  
  it("should return result of mul", async () => {
    const n1 = faker.number.int();
    const n2 = faker.number.int();
    const resultInt = calculator.mul(n1, n2);
    expect(resultInt).toBe(n1 * n2);
    const f1 = faker.number.float();
    const f2 = faker.number.float();
    const resultFloat = calculator.mul(f1, f2);
    expect(resultFloat).toBe(f1 * f2);
  });
});