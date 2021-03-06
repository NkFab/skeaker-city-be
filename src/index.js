import { connectDb } from "./data/db";
import server from "./server";

const PORT = process.env.PORT || 3000;
server.listen(PORT, connectDb);
