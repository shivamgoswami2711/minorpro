const app = require("./app");
const dotenv = require("dotenv");
const database = require("./db/connect");


dotenv.config({ path: "./config/config.env" });

database();
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
