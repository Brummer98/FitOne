// Index file with all functions
import app from "../index";
// Mongo DB
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
// Testing
import Request from "supertest";

// describe
describe("Get all users", () => {
  let connection;
  let db;

  // Before all
  beforeAll(async () => {
    connection = await MongoClient.connect("mongodb://localhost/fitoneDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db("fitoneDB");
  });

  // After all
  afterAll(async () => {
    await connection.close();
  });

  // getUsers method from routes file
  it("getUsers()", (done) => {
    Request(app)
      .get("/users")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  // getUsersWithID method from routes file
  it("getUserWithID()", (done) => {
    Request(app)
      .get("/user/63a16bd3810dfbe80729ef31")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
