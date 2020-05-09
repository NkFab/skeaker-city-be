import "@babel/polyfill";
import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
server.get("/", (_req, res) => {
  return res.status(200).json({
    data: { message: "Welcome to Sneakers City API" }
  });
});
server.use("*", (_req, res) =>
  res.status(404).json({
    error: { message: "API endpoint not found!" }
  })
);
export default server;
