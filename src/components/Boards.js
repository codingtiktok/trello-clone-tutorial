import Board from "./Board";
import { DragDropContext } from "react-beautiful-dnd";
import useTasks from "../hooks/useTasks";

const Boards = () => {
	const { updateTask } = useTasks();

	const handleDragEnd = (result) => {
		const { destination, source } = result;
		updateTask(destination, source);
	};

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Board statusType="todo" />
			<Board statusType="ongoing" />
			<Board statusType="completed" />
		</DragDropContext>
	);
};

export default Boards;
