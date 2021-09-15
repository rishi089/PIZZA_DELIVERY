const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const Pizza = require("./models/pizzaModel");

const db = require("./db.js");
const path=require('path');

const pizzaRoute = require("./routes/pizzaRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => "Server running on port");
