const express  = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// Routes
require("./routes/htmlRoutes")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://rodrigo:password1@ds135364.mlab.com:35364/heroku_0q4mfwb9", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}/`);
});
