import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import diariesRoutes from './routes/diaries.js';

const app = express();

app.use('/diaries',diariesRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://deardiarywork:deardiarywork123@cluster0.oyc3t.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5005;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify',false);
