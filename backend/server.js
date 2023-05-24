const app = require("./app");
const connectDatabase = require("./db/Database");

//handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//connect db
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//unhandled promise rejections
process.on("unhndledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server for unhandling promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
