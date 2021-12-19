import CreateTodo from "./components/CreateTodo";
import "./App.css";

function App() {
	return (
		<>
			<h1 className="text-center pt-5 pb-3 heading">My Todo List</h1>
			<div className="container todo-container">
				<CreateTodo />
			</div>
		</>
	);
}

export default App;
