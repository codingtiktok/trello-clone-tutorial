import Board from "./Board";

const Boards = () => {
	return (
		<>
			<Board statusType="todo" />
			<Board statusType="ongoing" />
			<Board statusType="completed" />
		</>
	);
};

export default Boards;
