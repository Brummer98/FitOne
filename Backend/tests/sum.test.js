import sum from './sum';
import mongoose from 'mongoose';
import App from '../../Frontend/src/App';
import { UserSchema } from '../models/userModel';
import { 
  addNewUser,
  getUsers,
  getUserWithID,
  updateUser,
  deleteUserByID
} from '../controllers/userControllers';
import { connection } from 'mongoose';

// Create user
const User = mongoose.model('User', UserSchema);

beforeAll(async () => {
  server = await App.listen(4000);
  connection = await MongoClient.connect(
    "http://localhost:4000/users",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ); 
  let testUser = new User(
    username = "Test",
    password = "Password",
    calories = 0,
    weight = 0,
    age = 24
  );
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('test to be created a new user called Test. (200)', () => {
  expect(addNewUser(POST, testUser).statusCode.toBe(200));
});