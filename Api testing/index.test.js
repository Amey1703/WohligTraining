const Test = require("supertest/lib/test");
const { app } = require("./index");
const supertest = require("supertest");

test("toContainer", async () => {
  await supertest(app)
    .get("/users")
    .expect(200)
    .then((res) => {
      expect(res && res.body && typeof res.body === "object");
    });
});

test("toContainer", async () => {
  await supertest(app)
    .post("/users")
    .send({ name: "John", age: 20 })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(201)
    .then((res) => {
      console.log(res.body);
    });
});
