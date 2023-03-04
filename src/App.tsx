import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';

const App = () => {
	const [isMain, setIsMain] = useState(true);
	return (
		<BrowserRouter>
			<Header isMain={isMain} />
			<Routes>
				<Route path="/notdefine" element={<>Not define</>}></Route>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
