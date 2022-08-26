import useTasks from "../hooks/useTasks";
import Card from "./Card";

const status = {
	todo: {
		color: "bg-undone",
		text: "To Do",
	},
	ongoing: {
		color: "bg-ongoing",
		text: "On Going",
	},
	completed: {
		color: "bg-done",
		text: "Completed",
	},
};

// statusType: todo, ongoing, completed

const Board = ({ statusType }) => {
	const { state } = useTasks();

	const tasks = state[statusType];

	return (
		<div className="w-full mb-4 p-4 bg-board rounded-md">
			<div className="flex items-center justify-between mb-2">
				<h1>{status[statusType].text}</h1>
				<div className={`${status[statusType].color} w-3 h-3 rounded-full`}></div>
			</div>
			{tasks.map((task) => {
				return <Card key={task.id} title={task.title} status={statusType} />;
			})}
		</div>
	);
};

export default Board;
