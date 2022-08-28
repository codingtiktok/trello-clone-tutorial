import { v4 as uuid } from "uuid";

const taskReducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_TASK":
			return {
				...state,
				todo: [
					...state.todo,
					{
						id: uuid(),
						title: payload.newTask,
					},
				],
			};
		default:
			throw new Error(`Unknown action type ${type}`);
	}
};

export default taskReducer;
