import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);https://www.linkedin.com/in/abhishek-pundir-5aa872176/

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


//routes import 
import useRouter from "./routes/user.routes.js"
app.use("/api/v1/users",useRouter)

export { app };
