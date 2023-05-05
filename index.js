const express = require("express");
const path = require("path");

const apiRoutes = require("./router");

const app = express();

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.get("/users/:userId/followers/:followerId", (req, res) => {
//   console.log(req.params);
//   res.send(`${req.params.userId} is followed by user ${req.params.followerId}`);
// });

// app.get("/saySomething/:msg/:count(\\d+)", (req, res) => {
//   let message = req.params.msg.repeat(req.params.count);

//   res.send(message);
// });

// // GET /abcd GET /acd
// app.get("/ab?cd", (req, res) => {
//   res.send("ab?cd");
// });

// app.get("/ab+cd", (req, res) => {
//   res.send("ab+cd");
// });

// // GET /zcd GET /zabcd
// app.get("/z(ab)?cd", (req, res) => {
//   res.send("ab?cd");
// });

// app.get(/hh/, (req, res) => {
//   res.send("/hр/");
// });

// app.get("/res-methods", (req, res) => {
//   // res.sendFile()
//   // res.sendStatus(404);
//   /**
//    * res.status(400);
//    * res.json({ x: 10 });
//    *  */
//   // res.status(401).json({ message: 'Login qilish kerak' });
//   // res.render('index')
//   // res.download('./public/about.html')
//   res.redirect("/modely");
// });

// /**
//  * app.get
//  * app.post
//  * app.put
//  * app.patch
//  * app.delete
//  */

app.listen(7778, () => {
  console.log("Server http://localhost:7778 -portda ishlayapti");
});
