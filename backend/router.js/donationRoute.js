const express = require("express");
const donatAction = require("../action/donatrequestAction")
const donationRoute = express.Router();

donationRoute.route("/new").post(donatAction.create);
donationRoute.route("/").get(donatAction.getAllData);
donationRoute.route("/:id").put(donatAction.pickup);

module.exports = donationRoute;    