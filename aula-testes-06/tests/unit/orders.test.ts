import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
// import orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";
import { Order } from "@prisma/client";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    jest
      .spyOn(orderRepository, "create")
      .mockImplementationOnce((): any => {
        return {
          protocol: new Date().getTime().toString(),
          status: "IN_PREPARATION",
        };
      });

    const orderInput: OrderInput = {
      client: faker.person.fullName(),
      description: faker.person.bio(),
    };
    const order = await createOrder(orderInput);
    expect(order).toEqual({
      protocol: expect.any(String),
      status: "IN_PREPARATION",
    });
  });

  it("should return an order based on the protocol", async () => {
    // TODO
    expect(true).toBe(true);
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // TODO
    expect(true).toBe(true);
  });
});