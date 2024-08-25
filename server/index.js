import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import authRoutes from "./routes/AuthRoutes.js"
import accountRoutes from "./routes/AccountRoute.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8747;
const databaseURL  = process.env.DATABASE_URL

app.use(cors({
    origin: process.env.ORIGIN, 
    methods: ["GET" , "POST" , "PUT" , "PATCH" , "DELETE"], // REST API Methods
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/account",accountRoutes)

const server = app.listen(port , () => {
    console.log({port})
    console.log(`Server is running at http://localhost:${port}`)
})


mongoose.connect(databaseURL)
  .then(() => {
    console.log("DB Connection successful");
  })
  .catch(err => {
    console.log(err.message);
  });
