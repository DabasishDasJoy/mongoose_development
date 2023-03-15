const express = require("express");
const port = process.env.PORT || 5000;
const adminRouter = require("./router/AdminRouter");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/admin", adminRouter);
app.listen(port, () => {
  console.log("App is running on port: ", port);
});
