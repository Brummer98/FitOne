const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/fitoneDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('users');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {userName: 'John', password: 'Pass'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: mockUser._id});
    expect(insertedUser).toEqual(mockUser);
  });
});


// // Import functions backend CRUD
// const userController = require('../controllers/userControllers')
// // Import model
// const User = require('../models/userModel');
// // Import DB file
// const db = require('./db')

// beforeAll(async () => await db.connect())

// // afterEach(async () => await db.clearDatabase())

// afterAll(async () => await db.closeDatabase())

// // Create a describe function
// describe('User found by id', () => {
//     // It...
//     it('User found by id', async done => {
//         const userID = '63a16bd3810dfbe80729ef31'
//         const user = await User.findById(userID)        

//         // Check the userName
//         expect(user.userName).toEqual("BramvHout")
//         done()
//     })
// })