// import server from "./server";
// import { connectDb } from "./data/db";

// const PORT = process.env.PORT || 3000;
// connectDb().then(async () => {
//   console.log('Connected to DB');
//   server.listen(
//     PORT,
//     () =>
//       process.env.NODE_ENV === "development" &&
//       console.log(`Listening on port ${PORT}`)
//   );
// }).catch(err=>{
//   console.log(err, "++++++");
// });

import "@babel/polyfill";
import express from "express";
import cors from "cors";
import routes from "./routes/sneakers.routes";
import { connectDb } from "./data/db";

const server = express();
server.use(cors());
server.use(express.json());
server.use("/api", routes);
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

const PORT = process.env.PORT || 3000;
server.listen(PORT, connectDb);

export default server;
