import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import AllTodos from "./AllTodos";

const CreateTodo = () => {
	const [description, setDescription] = useState("");
	const onSubmitForm = async (e) => {
		const BASE_URL = "http://localhost:5000";
		e.preventDefault();
		await axios
			.post(`${BASE_URL}/todos/add`, description)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		// once the data has been posted, it set the input to empty and refresh the page show the list of data in the table
		setDescription("");
		window.location = "/";
	};
	return (
		<div className="p-3">
			<form className="d-flex mt-3" onSubmit={onSubmitForm}>
				<input
					type="text"
					className="form-control"
					placeholder="Type New Todo"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					autoFocus
					required
				/>
				<Button variant="primary" type="submit">
					ADD
				</Button>
			</form>
			<AllTodos />
		</div>
	);
};

export default CreateTodo;
