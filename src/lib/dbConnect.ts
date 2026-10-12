import mongoose from "mongoose";

type ConnectionObj = {
  isConnected?: number;
};

const connection: ConnectionObj = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already conenected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log("Db connected successfully");
    
  } catch (error) {
    console.log("DB connection failed", error);
    
    process.exit();
  }
}

export default dbConnect;