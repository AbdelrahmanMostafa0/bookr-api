import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./modules/auth/auth.route";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Bookr API" });
});
export default app;
