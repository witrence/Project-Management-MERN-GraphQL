const express = require("express");
require("dotenv").config(); // to include variables in .env
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

// connecting to databsee
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server started on PORT ${port}`));
