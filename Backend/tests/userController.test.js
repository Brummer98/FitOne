// ES module with imports
import { MongoClient } from 'mongodb';
import userController from '../controllers/userControllers';
import routes from '../routes/fitoneRoutes';

// req.get/users

// Describe the test
describe('insert', () => {
  jest.setTimeout(30000);
  let connection;
  let db;
  
  // Before all open connection
  beforeAll(async () => {
    // 
    connection = await MongoClient.connect('mongodb://localhost/fitoneDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('fitoneDB');
  });

  // After all close connection
  afterAll(async () => {
    await connection.close();
  });

  // It test with mockuser
  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {userName: 'John', password: 'Pass'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: mockUser._id});
    expect(insertedUser).toEqual(mockUser);
  });
});

// 