// Index file with all functions
import app from "../index";
// Mongo DB
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
// Testing
import Request from "supertest";

import server from "../index";

// Describe tests
describe("Testing backend CRUD", () => {

  // Create variables
  let connection;
  let db;
  let elementID;
  
  // Before all
  beforeAll(async () => {
    // Online: mongodb+srv://FOAdmin:AO5F4p3Wn2X2AaRy@fitone23.bqbhog3.mongodb.net/fitoneDB Local: mongodb://localhost/fitoneDB
    connection = MongoClient.connect("mongodb+srv://FOAdmin:AO5F4p3Wn2X2AaRy@fitone23.bqbhog3.mongodb.net/fitoneDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = 'fitoneDB';
    // connection.db("fitoneDB");
    // done()
  });

  // After all
  afterAll(async () => {
    // await connection.close();
    mongoose.connection.close()
    // done()
    // Close PORT
    // var server = app.listen(4001);
    // app.close((err) => {
    //   process.exit(err ? 1 : 0)
    // })
  });

  // getUsers()
  it("should return all users", async () => {
    // jest.setTimeout(30000);
    const res = await Request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    console.log(server);
  });

  // addNewUser()
  // it("should create a user", async () => {
  //   const res = await Request(app).post("/users").send({
  //     userName: "Test",
  //     password: "Pass",
  //   });
  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.userName).toBe("Test");
  //   elementID = res.body._id;
  //   jest.setTimeout(30000);
  // });

  // getUserWithID()
  // it("should return a specific user", async () => {
  //   // jest.setTimeout(30000);
  //   const res = await Request(app).get
  //   // (`/user/${elementID}`);
  //   ("/user/63a16bd3810dfbe80729ef31");
  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.userName).toBe("UpdatedUsername");
  // });

  // updateUser()
  // it("should update a user", async () => {
  //   // jest.setTimeout(30000);
  //   const res = await Request(app)
  //     .put(`/user/${elementID}`)
  //     .send({
  //       userName: "UpdateNewName",
  //       password: "UpdatedPassword",
  //     });
  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.userName).toBe("UpdateNewName");
  // });

  // deleteUserByID()
  // it("should delete a user", async () => {
  //   // jest.setTimeout(30000);
  //   const res = await Request(app).delete(
  //     `/user/${elementID}`
  //   );
  //   expect(res.statusCode).toBe(200);
  // });
});