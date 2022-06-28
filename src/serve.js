import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config()
// console.log(process.env)
// const express = require('express')
// const path = require("path")
const app = express()
const port = process.env.Port;

configViewEngine(app);
// app.get('/', (req, res) => {
//   res.send('Hello World vs TRAN KHAC NHU!')
// })


app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})
