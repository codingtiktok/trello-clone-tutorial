import Delete from "./components/Delete";
import Input from "./components/Input";
import Boards from "./components/Boards";
import { TaskProvider } from "./hooks/useTasks";

function App() {
	return (
		<div className="layout pt-8">
			<div className="max-w-[26rem] mx-auto">
				<TaskProvider>
					<Input />
					<Delete />
					<Boards />
				</TaskProvider>
			</div>
		</div>
	);
}
export default App;
