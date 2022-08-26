function App() {
	return (
		<div className="layout pt-8">
			<div className="max-w-[26rem] mx-auto">
				<h1 className="text-blue-500 bg-red-200">Hello world</h1>
				<p>Hello world</p>
				<div className="flex gap-1">
					<div className="w-4 h-4 rounded-lg bg-bg border border-primary"></div>
					<div className="w-4 h-4 rounded-lg bg-primary"></div>
					<div className="w-4 h-4 rounded-lg bg-done"></div>
					<div className="w-4 h-4 rounded-lg bg-done-secondary"></div>
					<div className="w-4 h-4 rounded-lg bg-ongoing"></div>
					<div className="w-4 h-4 rounded-lg bg-ongoing-secondary"></div>
					<div className="w-4 h-4 rounded-lg bg-undone"></div>
					<div className="w-4 h-4 rounded-lg bg-undone-secondary"></div>
					<div className="w-4 h-4 rounded-lg bg-board"></div>
					<div className="w-4 h-4 rounded-lg bg-delete"></div>
				</div>
			</div>
		</div>
	);
}
export default App;
