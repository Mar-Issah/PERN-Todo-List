const express = require("express");
const app = express();
require("dotenv").config();

// use port 3000 unless there exists a preconfigured port in env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Successfully connected on port ${PORT}`);
});
