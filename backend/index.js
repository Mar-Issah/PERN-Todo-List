const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// use port 3000 unless there exists a preconfigured port in env file
const PORT = process.env.PORT || 5000;

// cors middleware. to use middle use app.use
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Successfully connected on port ${PORT}`);
});
