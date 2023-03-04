import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>Not define</>}></Route>
					<Route path="*" element={<>Not define this</>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
