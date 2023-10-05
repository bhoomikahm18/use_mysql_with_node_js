require("dotenv").config(); 

const express = require("express");
const app = express();

app.use(express.json()); // parse json bodies in the request object

app.use("/posts", require("./routes/postRoutes"));

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went rely wrong",
  });
});

// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));