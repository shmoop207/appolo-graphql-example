import { IRequest, IResponse, NextFn, App } from "appolo";
import bodyParser = require("body-parser");
import    serve = require("serve-static");
import    path = require("path");
import    cors = require("cors");

module.exports = function(app: App) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(serve(path.join(__dirname, "../../public")));

};
