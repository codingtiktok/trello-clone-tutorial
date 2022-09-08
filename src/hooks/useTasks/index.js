import * as React from "react";
import { v4 as uuid } from "uuid";
import taskReducer from "./reducer";

const initialTasks = {
	todo: [
		{
			id: uuid(),
			title: "Masak nasi goreng",
		},
		{
			id: uuid(),
			title: "Beli alat tulis",
		},
	],
	ongoing: [
		{
			id: uuid(),
			title: "Bikin to do list",
		},
	],
	completed: [
		{
			id: uuid(),
			title: "Belajar untuk ulangan besok",
		},
	],
};

const TaskContext = React.createContext({});

export const TaskProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(taskReducer, initialTasks, () =>
		JSON.parse(localStorage.getItem("tasks") || initialTasks)
	);

	React.useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(state));
	}, [state]);

	const addTask = (newTask, statusType) => {
		dispatch({ type: "ADD_TASK", payload: { newTask, statusType } });
	};

	const updateTask = (destination, source) => {
		dispatch({ type: "UPDATE_TASK", payload: { source, destination } });
	};

	const deleteTask = (source) => {
		dispatch({ type: "DELETE_TASK", payload: source });
	};

	return <TaskContext.Provider value={{ state, addTask, updateTask, deleteTask }}>{children}</TaskContext.Provider>;
};

const useTasks = () => React.useContext(TaskContext);

export default useTasks;
