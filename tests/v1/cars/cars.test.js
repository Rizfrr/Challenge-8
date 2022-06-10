const request = require("supertest");
const app = require("../../../app");
require("dotenv").config();

describe("GET /v1/cars", () => {
  it("list all car", async () => {
    return request(app)
      .get("/v1/cars")
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });
});
