import "@babel/polyfill";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  return res.status(200).json({
    data: { message: "Welcome to Sneakers City API" }
  });
});
app.use("*", (_req, res) =>
  res.status(404).json({
    error: { message: "API endpoint not found!" }
  })
);
export default app;
