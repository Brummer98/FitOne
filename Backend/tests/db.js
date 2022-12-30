const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

// connect to db
module.exports.connect = async () => {
    const uri = await mongod.getUri();
    const mongooseOpt = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 10
    };
    await mongoose.connect(uri, mongooseOpt);
}

// Disconnect and close connection
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

// Clear the db, remove all data
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}