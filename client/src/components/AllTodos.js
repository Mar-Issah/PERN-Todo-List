import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const AllTodos = () => {
	const getAllTodos = async () => {
		const BASE_URL = "http://localhost:5000";
		const response = await axios
			.get(`${BASE_URL}/todos`)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log(response);
	};
	useEffect(() => {
		getAllTodos();
	});
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
					<tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default AllTodos;
