const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

// use port 3000 unless there exists a preconfigured port in env file
const PORT = process.env.PORT || 5000;

//----------require routes----------------

// app.use(cors());
app.use(
	cors({
		origin: "*",
	})
);
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const todoRouter = require("./routes/todo");
app.use("/todos", todoRouter);

app.listen(PORT, () => {
	console.log(`Successfully connected on port ${PORT}`);
});
