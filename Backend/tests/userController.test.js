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