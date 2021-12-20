import React from "react";
import { Table } from "react-bootstrap";

const AllTodos = () => {
	return (
		<div>
			<Table bordered hover className="mt-4">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
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
