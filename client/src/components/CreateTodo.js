import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import AllTodos from "./AllTodos";

const CreateTodo = () => {
	const [description, setDescription] = useState("");

	//on form submit, make a post requet to endpoint with the desc
	const onSubmitForm = (e) => {
		const BASE_URL = "http://localhost:5000";
		e.preventDefault();
		axios
			.post(`${BASE_URL}/todos/add`, { description })
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		// set desc to null and refresh to see changes
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
