import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "protocols-generator";
import { v4 as uuidv4 } from "uuid";

jest.mock("uuid", () => {
  return {
    v4: () => { return "valor-simulado-no-mock" }
  };
});

describe("calculator tests", () => {
  it("should generate protocol", async () => {
    const name = faker.person.firstName();
    const lastName = faker.person.lastName();
    const priority = faker.datatype.boolean();
    const protocol = generateProtocolForPacient(name, lastName, priority);
    expect(protocol).toEqual({
      date: expect.any(Date),
      priority: expect.any(Boolean),
      pacient: `${name} ${lastName}`,
      protocol: "valor-simulado-no-mock",
    });
  });
});