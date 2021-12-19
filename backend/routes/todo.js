const router = require("express").Router();
const pool = require("../dbConfig"); //require from the dbConfig file to use to perform SQL queries here

//using express router to create various route for todo
//---------------------get all todos-------------------------
router.get("/", async (req, res) => {
	//this command is to get all the todos
	try {
		const allTodo = await pool.query("SELECT * FROM todo");
		res.status(200).json(allTodo);
	} catch (err) {
		console.log(err.message);
	}
});

//----------------------add new-------------------------
//async/await good from asynchronous fxn wait for the fxn  to be completed to continue the fxn

//try/catch in case of error when posting

//request whatever was added to the body
router.post("/add", async (req, res) => {
	try {
		const { description } = req.body;
		console.log(description);
		//this is how you use pg.pool https://node-postgres.com/features/queries to write queries whereever you see $1, $@, $3 (placeholder or variable) you fill the values in the array respectively
		const newTodo = await pool.query(
			"INSERT INTO todo(description) VALUES($1) RETURNING *",
			[description]
		);
		res.status(200).json(newTodo.rows[0]);
	} catch (err) {
		console.log(err.message);
	}
	//with rows[0], you will get a whole lot of jibberish in the console or frontend
});

//-----------------findbyid(id params)----------------------------
// router.route("/:id").get((req, res) => {
// 	Exercise.findById(req.params.id)
// 		.then((exercise) => res.json(exercise))
// 		.catch((err) => res.status(400).json("Error : " + err));
// });

//-----------------find and delete-------------------------
// router.route("/:id").delete((req, res) => {
// 	Exercise.findByIdAndDelete(req.params.id)
// 		.then(() => res.json("Exercise deleted"))
// 		.catch((err) => res.status(400).json("Error: " + err));
// });

//-----------------update/post-------------------------
// router.route("/update/:id").post((req, res) => {
// 	Exercise.findById(req.params.id)
// 		.then((exercise) => {
// 			exercise.username = req.body.username;
// 			exercise.description = req.body.description;
// 			exercise.duration = Number(req.body.duration);
// 			exercise.date = Date.parse(req.body.date);

// 			exercise
// 				.save()
// 				.then(() => res.json("Exercise updated"))
// 				.catch((err) => res.status(400).json("Error: " + err));
// 		})

// 		.catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;
