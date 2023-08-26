module.exports = {
  preset: "@shelf/jest-mongodb",
};

global.__MONGO_URI__ = process.env.MONGO_URI || "mongodb://localhost:27017";
global.__MONGO_DB_NAME__ = "testdb"; // Change this to your desired DB name