import DraggableIcon from "./DraggableIcon";

const colors = {
	todo: "bg-undone-secondary",
	ongoing: "bg-ongoing-secondary",
	completed: "bg-done-secondary",
};

const Card = ({ title, status }) => {
	return (
		<div className={`${colors[status]} rounded-md px-2 py-3 flex justify-between items-center gap-2 mb-2`}>
			<p className="break-all">{title}</p>
			<div>
				<DraggableIcon />
			</div>
		</div>
	);
};

export default Card;
