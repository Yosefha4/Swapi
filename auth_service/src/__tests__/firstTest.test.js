const { request } = require('http');
const {MongoClient} = require('mongodb');
// import app from '../index.js'
// const signin = require('../index.js')
// const UserModel = require("../models/UserModel.js")
import UserModel from '../models/UserModel.js';

const userData = {
    username:'testUser',
    email:'test@email.com',
    password:'123456'
}

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    if(connection){
    await connection.close();
    }
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', usename: 'John',};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });

  it("Should create & save user successfully", async () => {
    const validUser = UserModel(userData);
    const savedUser = await validUser.save();

    expect(savedUser._id).toBeDefined();

  })

//   it('should signup a new user', async () => {
//     const mockUser = {
//       username: 'testuser',
//       email: 'testuser@email.com',
//       password: 'testpassword',
//       // Add other necessary fields here
//     };

//     const response = await request("http:localhost:8080/api/auth")
//     .post('/signup')
//     .send(mockUser)
//     .expect(200);

//     expect(response.text).toBe('User has been created!');

//     const users = db.collection('users');
//     const insertedUser = await users.findOne({ username: 'testuser' });
//     expect(insertedUser).toBeDefined();
//     // Add more assertions to verify the inserted user's data
//   });

});