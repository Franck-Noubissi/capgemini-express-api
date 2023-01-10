//var express = require('express');
import express from "express";
import { contacts } from "./data.js";
import * as controller from "./controller.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/api/contacts', controller.getContacts);

app.get('/api/contact/:id', controller.getContactById)

app.post('/api/createContact', controller.addContact)

//module.exports = app
export default app
