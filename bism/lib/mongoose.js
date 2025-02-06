import mongoose from "mongoose";

// Function to connect to the database
const connectionToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to the database');
    return;  // No need to reconnect
  }

  try {
    // Try to establish a connection to the MongoDB database
    await mongoose.connect(process.env.MongoURL);
    console.log('Successfully connected to the database');
  } catch (err) {
    // If there's an error, log it
    console.error('Error connecting to the database:', err);
  }
};

export default connectionToDatabase;
