import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import EditTodo from "./EditTodo";

const AllTodos = () => {
	const [todos, setTodos] = useState([]);
	const BASE_URL = "http://localhost:5000";

	//get all the todo list on page render
	const getAllTodos = () => {
		axios
			.get(`${BASE_URL}/todos`)
			.then((response) => {
				console.log(response.data);
				setTodos(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		getAllTodos();
	}, []);

	//delete todo function
	const deleteTodo = (id) => {
		axios
			.delete(`${BASE_URL}/todos/delete/${id}`)
			.then((response) => {
				console.log(response.data);
				setTodos(todos.filter((todo) => todo.todo_id !== id));
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<Table bordered hover className="mt-5">
				<thead>
					<tr>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, idx) => (
						<tr key={idx}>
							<td>{todo.description}</td>
							<td>
								<EditTodo todo={todo} />
							</td>
							<td>
								<Button
									variant="danger"
									onClick={() => deleteTodo(todo.todo_id)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default AllTodos;
