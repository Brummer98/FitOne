// Index file with all functions
import app from "../index";
// Mongo DB
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";
// Testing
import Request from "supertest";

// Describe tests
describe("Testing backend CRUD", () => {

  // Create variables
  let connection;
  let db;
  let elementID;
  
  // Before all
  beforeAll(done => {
    connection = MongoClient.connect("mongodb://localhost/fitoneDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = 'fitoneDB';
    // connection.db("fitoneDB");
    done()
  });

  // After all
  afterAll(done => {
    // await connection.close();
    mongoose.connection.close()
    done()
  });

  // getUsers()
  it("should return all users", async () => {
    const res = await Request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    jest.setTimeout(30000);
  });

  // addNewUser()
  it("should create a user", async () => {
    const res = await Request(app).post("/users").send({
      userName: "Test",
      password: "Pass",
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
    jest.setTimeout(30000);
  });

  // updateUser()
  it("should update a product", async () => {
    const res = await Request(app)
      .put(`/user/${elementID}`)
      .send({
        userName: "UpdatedUsername",
        password: "UpdatedPassword",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("UpdatedUsername");
    jest.setTimeout(30000);
  });

  // deleteUserByID()
  it("should delete a user", async () => {
    const res = await Request(app).delete(
      `/user/${elementID}`
    );
    expect(res.statusCode).toBe(200);
    jest.setTimeout(30000);
  });

});