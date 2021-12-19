import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CreateTodo = () => {
	const [description, setDescription] = useState("");
	console.log(description);
	return (
		<div className="p-3">
			<form className="d-flex mt-3">
				<input
					type="text"
					className="form-control"
					placeholder="Type New Todo"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button variant="primary" type="submit">
					ADD
				</Button>
			</form>
		</div>
	);
};

export default CreateTodo;
