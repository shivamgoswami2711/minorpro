const express = require("express");
const medicineRoute = express.Router();
const medicineAction = require("../action/medicineAction");



medicineRoute.route("/").post(medicineAction.create);
medicineRoute.route("/").get(medicineAction.getMedicine);



module.exports = medicineRoute;
