// require('dotenv').config(path: './.env')
import dotenv from "dotenv";
dotenv.config({
  path: './.env'
});
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running at port : http://localhost:${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(" MONGO DB connection failed !!!", err);
  })


/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error
    })

    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ", error);
    throw err
  }
})()*/