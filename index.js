const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/cars", router);

/**
 * All wrong routes
 */
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Wrong route"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
