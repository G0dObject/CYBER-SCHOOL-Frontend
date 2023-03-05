import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Avatar } from './components/Profile/Avatar';
import Home from './pages/Home';

const App = () => {
	const [isMain, setIsMain] = useState(true);
	return (
		<BrowserRouter>
			<Header isMain={isMain} />
			<Routes>
				<Route
					path="/notdefine"
					element={
						<>
							<Avatar></Avatar>
						</>
					}></Route>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
