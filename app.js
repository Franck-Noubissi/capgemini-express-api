//var express = require('express');
import express from "express";
var app = express();

const contacts = [{
  id: "0",
  nom: "Xavier",
  telephone: "047U3894894"
},
{
  id: "1",
  nom: "Tulipe",
  telephone: "78499387493",
}]

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/api/contacts', function (req, res) {
  res.status(200).json(contacts)
});

app.get('/api/contact/:id', function (req, res) {
  const id = req.params.id;
  var contact = contacts.find((user) => user.id === id)
  res.status(200).json(contact)
})

//module.exports = app
export default app
