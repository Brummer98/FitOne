// import { MongoClient } from 'mongodb';

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = MongoClient.connect("mongodb://localhost:27017", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     // db = "fitoneDB";
//     // await connection.db("fitoneDB");
//     // db = db.connection("fitoneDB")
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = {_id: '001', userName: 'Test', password: 'password', calories: 3000, weight: 80, age: 25};
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({_id: '001'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });