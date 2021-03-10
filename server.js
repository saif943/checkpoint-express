const express = require("express");
const app = express();

//middleware
var requestTime = function (req, res, next) {
  const start = new Date().getHours();
  const start2 = new Date().getDay();
  // const Day = start.getDay();
  // const hour = start.gethours();
  console.log(start2);
  if (start < 9 || start > 17 || start2 === 0 || start2 === 6) {
    // console.log("access denied");
    res.send("access denied");
  } else {
    next();
  }

  //   next();
};

app.get("/", requestTime, (req, res) => {
  res.sendFile(__dirname + "/Home/index.html");
});
app.get("/Our-Services", requestTime, (req, res) => {
  res.sendFile(__dirname + "/Home/Our-Services.html");
});
app.get("/Contact-us", requestTime, (req, res) => {
  res.sendFile(__dirname + "/Home/Contact-us.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/Home/style.css");
});

//start server
const port = 5000;
app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
});
