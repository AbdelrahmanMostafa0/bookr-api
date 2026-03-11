import "dotenv/config";
import app from "./app";
import connectDB from "./config/db";
import { initSocket } from "./config/socket";
import http from "http";

const PORT = process.env.PORT || 9000;
const server = http.createServer(app);
initSocket(server);
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
