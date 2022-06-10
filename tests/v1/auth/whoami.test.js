const request = require("supertest");
const app = require("../../../app");
require("dotenv").config();

describe("GET /v1/auth/whoami", () => {
  it("whoami failed response with 401 as status code", async () => {
    const token = "";

    return request(app)
      .get("/v1/auth/whoami")
      .set("Content-Type", "application/json")
      .send({ token })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              message: expect.any(String),
              name: expect.any(String),
              details: null,
            },
          })
        );
      });
  });
  // it("whoami success response with 200 as status code", async () => {
  //   const email = "string";
  //   const password = "string";

  //   return request(app)
  //     .post("/v1/auth/login")
  //     .get("/v1/auth/whoami")
  //     .set("Content-Type", "application/json")
  //     .send({ email, password })
  //     .then((res) => {
  //       expect(res.statusCode).toBe(200);
  //       expect(res.body).toEqual(
  //         expect.objectContaining({
  //           ...res.body,
  //         })
  //       );
  //     });
  // });
});
