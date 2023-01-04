const {MongoClient} = require('mongodb');
const userController = require('')

// req.get/users

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/fitoneDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('fitoneDB');
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