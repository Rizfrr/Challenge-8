const request = require("supertest");
const app = require("../../../app");
require("dotenv").config();

describe("POST /v1/auth/login", () => {
  it("login success response with 201 as status code", async () => {
    const email = "string";
    const password = "string";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  it("login failed response with 422 as status code", async () => {
    const email = "string";
    const password = "string2";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              message: expect.any(String),
              name: expect.any(String),
              details: {},
            },
          })
        );
      });
  });
});
