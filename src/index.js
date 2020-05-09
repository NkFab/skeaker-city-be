import server from "./server";

const PORT = process.env.PORT || 3000;

server.listen(
  PORT,
  () =>
    process.env.NODE_ENV === "development" &&
    console.log(`Listening on port ${PORT}`)
);
