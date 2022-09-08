import Board from "./Board";
import Delete from "./Delete";
import { DragDropContext } from "react-beautiful-dnd";
import useTasks from "../hooks/useTasks";

const Boards = () => {
	const { updateTask, deleteTask } = useTasks();

	const handleDragEnd = (result) => {
		const { destination, source } = result;
		if (destination.droppableId === "delete") {
			deleteTask(source);
		} else {
			updateTask(destination, source);
		}
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Delete />
			<Board statusType="todo" />
			<Board statusType="ongoing" />
			<Board statusType="completed" />
		</DragDropContext>
	);
};

export default Boards;
