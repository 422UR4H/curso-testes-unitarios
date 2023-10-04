import { faker } from "@faker-js/faker";
import { getInfractionsFrom } from "infractions-service";
import * as infractionsRepository from "infractions-repository";
import * as usersRepository from "users-repository";
import { Level } from "@prisma/client";

describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    const user = {
      id: faker.number.int(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      licenseId: faker.vehicle.vrm()
    };
    jest
      .spyOn(usersRepository, "getUserByDocument")
      .mockImplementationOnce((): any => {
        return user;
      });

    const infractions = {
      id: faker.number.int(),
      date: new Date(),
      description: faker.person.bio(),
      cost: faker.number.int(),
      level: Level.LIGHT,
      userId: user.id
    };
    jest
      .spyOn(infractionsRepository, "getInfractionsFrom")
      .mockImplementation((): any => {
        return infractions;
      });

    const result = await getInfractionsFrom(user.licenseId);
    expect(result).toEqual(
      expect.objectContaining({ ...user, infractions })
    );
  });

  it("should throw an error when driver license does not exists", () => {
    expect.assertions(1);
    jest
      .spyOn(usersRepository, "getUserByDocument")
      .mockImplementationOnce((): any => {
        return undefined;
      });

    const result = getInfractionsFrom(faker.vehicle.vrm());
    expect(result).rejects.toEqual({
      type: "NOT_FOUND",
      message: "Driver not found."
    });
  })
});