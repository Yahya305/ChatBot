const mongoose = require("mongoose");
require("dotenv").config({path:"./.env.local"})
const MONGO_PASS=process.env.MONGO_PASS
// const URIstring = "mongodb://127.0.0.1:27017/e-comm";
const URIstring = `mongodb+srv://Yahya:${MONGO_PASS}@notesapp.k0xfpfx.mongodb.net/NLP`;;
const connectMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    URIstring,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connection successful");
      }
    }
  );
};

module.exports = connectMongo;
