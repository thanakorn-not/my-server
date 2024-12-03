const express = require('express');
const app = express.Router();

const controller = require('../controllers/customer.controller');

app.get("/", controller.get);

app.get("/:id", controller.getById);

app.get("/name/:name", controller.getByName);

app.post("/", controller.create);

app.put("/:id", controller.edit);

app.patch("/:id", controller.patch);

app.delete("/:id", controller.delete);


module.exports = app;