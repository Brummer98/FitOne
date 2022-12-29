import { MongoClient } from 'mongodb';

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = MongoClient.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    db = await connection.db("fitoneDB");
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: '63a16bd3810dfbe80729ef31', userName: 'Test', password: 'password', calories: 3000, weight: 80, age: 25};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: '63a16bd3810dfbe80729ef31'});
    expect(insertedUser).toEqual(mockUser);
  });
});