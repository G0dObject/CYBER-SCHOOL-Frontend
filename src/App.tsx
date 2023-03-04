import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<>Not define</>}></Route>
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
