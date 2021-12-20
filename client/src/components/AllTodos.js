import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const AllTodos = () => {
	const [todos, setTodos] = useState([]);
	const BASE_URL = "http://localhost:5000";
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

	//on click of the delete btn pass in the id which is the url param and on req.param it will retrive the id and perform the delete fx on the route
	const deleteTodo = (id) => {
		axios
			.delete(`${BASE_URL}/todos/delete/${id}`)
			.then((response) => {
				console.log(response.data);
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
								<Button variant="primary">Edit</Button>
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
