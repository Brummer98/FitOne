// Index file with all functions
import app from "../index";
// Mongo DB
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
// Testing
import Request from "supertest";

// Describe tests
describe("Testing backend CRUD", () => {

  // Create variables
  let connection;
  let db;
  let elementID;

  var fillP = "Passs";
  var fillPNew = "Passs01";
  
  // Before all
  beforeAll(async () => {
    // Online: mongodb+srv://FOAdmin:AO5F4p3Wn2X2AaRy@fitone23.bqbhog3.mongodb.net/fitoneDB Local: mongodb://localhost/fitoneDB
    connection = MongoClient.connect("mongodb+srv://FOAdmin:AO5F4p3Wn2X2AaRy@fitone23.bqbhog3.mongodb.net/fitoneDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = 'fitoneDB';
  });

  // After all
  afterAll(async () => {
    mongoose.connection.close()
  });

  // getUsers()
  it("should return all users", async () => {
    const res = await Request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // addNewUser()
  it("should create a user", async () => {
    const res = await Request(app).post("/users").send({
      userName: "Test",
      password: fillP,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("Test");
    elementID = res.body._id;
    jest.setTimeout(30000);
  });

  // getUserWithID()
  it("should return a specific user", async () => {
    const res = await Request(app).get(`/user/${elementID}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("Test");
  });

  // updateUser()
  it("should update a user", async () => {
    const res = await Request(app)
      .put(`/user/${elementID}`)
      .send({
        userName: "UpdateNewName",
        password: fillPNew,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("UpdateNewName");
  });

  // deleteUserByID()
  it("should delete a user", async () => {
    const res = await Request(app).delete(
      `/user/${elementID}`
    );
    expect(res.statusCode).toBe(200);
  });
});