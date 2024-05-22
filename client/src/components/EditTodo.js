import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

//pass in todo to be edited as props
const EditTodo = ({ todo }) => {
	const [description, setDescription] = useState(todo.description);
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
		//set desc back to orignal form
		setDescription(todo.description);
	};
	const handleShow = () => setShow(true);

	//function to edit the todo.
	const updateTodo = (e) => {
		//const BASE_URL = "http://localhost:5000";
		const BASE_URL ='https://pern-todo-list-server.vercel.app'
		e.preventDefault();
		axios
			.put(`${BASE_URL}/todos/update/${todo.todo_id}`, { description })
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		window.location = "/";
	};
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Edit
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Todo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input
						type="text"
						className="form-control"
						placeholder="Eidt Your Todo"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						autoFocus
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={(e) => updateTodo(e)}>
						Save Changes
					</Button>
					<Button
						variant="secondary"
						className="btn-danger"
						onClick={handleClose}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EditTodo;
