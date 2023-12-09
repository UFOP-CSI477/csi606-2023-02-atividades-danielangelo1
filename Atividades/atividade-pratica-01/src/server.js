const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();
    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  }

  database() {
    mongoose.connect(db.uri);
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
