import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const AllTodos = () => {
	const [todos, setTodos] = useState([]);
	const getAllTodos = () => {
		const BASE_URL = "http://localhost:5000";
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
							<td>Edit</td>
							<td>Delete</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default AllTodos;
