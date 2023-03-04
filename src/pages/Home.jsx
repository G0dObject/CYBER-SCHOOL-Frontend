import { WelcomeScreen } from "../components/WelcomeScreen/WelcomeScreen";
import { Advantages } from "../components/Advantages/Advantages";
import { Join } from "../components/Join/Join";
import { Subscribe } from "../components/Subscribe/Subscribe";

const Home = () => {
	return (
		<div className="home">
			<WelcomeScreen />
			<Advantages />
			<Join />
			<Subscribe />
		</div>
	);
}

export default Home;
