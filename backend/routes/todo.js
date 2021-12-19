const router = require("express").Router();
const pool = require("../dbConfig"); //require from the dbConfig file to use to perform SQL queries here

//using express router to create various route for todo
//---------------------get all todos-------------------------
router.get("/", async (req, res) => {
	//this command is to get all the todos. we dont have to ay returning * because the perpose of select is to return everything
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

//--------------get a todo (id params)--------------------
router.get("/:id"),
	async (req, res) => {
		//if we go to localhost:5000/todo/random and console.log(req.params) to retrie the route parameter, the response is {id:"random"}
		try {
			const { id } = req.params;
			const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
				id,
			]);
			res.status(200).json(todo.rows[0]);
		} catch (err) {
			console.log(err.message);
		}
	};

//-----------------update/put-------------------------
router.put("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);
		res.status(200).json("Todo was updated");
	} catch (err) {
		console.log(err.message);
	}
});
//-----------------find and delete-------------------------
// router.route("/:id").delete((req, res) => {
// 	Exercise.findByIdAndDelete(req.params.id)
// 		.then(() => res.json("Exercise deleted"))
// 		.catch((err) => res.status(400).json("Error: " + err));
// });
module.exports = router;
