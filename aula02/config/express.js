const express = require("express");
const bodyParser = require("body-parser");
const load = require("express-load");

module.exports = () => {
  /* Creating an instance of express. */
  const app = express();

  /* Setting the port to 3000. */
  app.set("port", 3000);

  /* Middleware */
  app.use(express.static("./public"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require("method-override")());

  /* Setting the view engine to ejs and the views to the app/views folder. */
  app.set("view engine", "ejs");
  app.set("views", "./app/views");

  /* Loading the models, controllers, and routes into the app. */
  load("models", { cwd: "app" }).then("controllers").then("routes").into(app);

  return app;
};
