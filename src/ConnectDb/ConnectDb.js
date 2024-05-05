let isConnected = false;

import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();


export const ConnectDb = () => {
  try {
    mongoose.set("strictQuery", true);
    if (isConnected) {
      console.log("already connected");
    } else {
      const MongoUrl = process.env.MONGO_URL;
      if (MongoUrl) {
        mongoose.connect(MongoUrl, {
          dbName: kabbo_kotha,
        });
      } else {
        console.log("no url specified");
      }
      isConnected = true;
      console.log("Succefully connected");
    }
  } catch (err) {
    console.log(err);
  }
};
