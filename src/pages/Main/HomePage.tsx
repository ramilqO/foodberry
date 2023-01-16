import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Content from "../../components/Content/Content";
import Benefits from "../../components/Benefits/Benefits";

const HomePage = () => {

	return (
		<main className="main">
			<Intro />
			<NavBar />
			<Content />
			<Benefits />
		</main>
	);
};

export default HomePage;
