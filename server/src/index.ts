import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/index.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import Scheduler from "./scheduler/scheduler.js"

dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);

(async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log("DB OK"))
      .catch((err) => console.log("DB error", err));
    app.listen(PORT, () => {
      console.log(`Server is running at ${HOST}:${PORT}`);
    });
    await Scheduler.removeExpiredTodos()
  } catch (err) {}
})();
