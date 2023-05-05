const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("<h1>ALL BOOKS</h1>");
});

router.get("/books/:bookName", (req, res) => {
  res.send("<h1>SEARCH BOOK</h1>");
});

router.get("/book/:authorName", (req, res) => {
  res.send("<h1>AuthorName</h1>");
});

router.get("/bookType/:type=genre", (req, res) => {
  res.send("<h1>Genre</h1>");
});

router.get("/bookPrice/maxprice=price&minprice", (req, res) => {
  res.send("<h1>Price</h1>");
});

router.get("/partners", (req, res) => {
  res.send("<h1>Partners</h1>");
});

router.get("/partners/region=regionName", (req, res) => {
  res.send("<h1>Region</h1>");
});

module.exports = router;
