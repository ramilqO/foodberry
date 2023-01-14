import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Content from "../../components/Content/Content";

const HomePage = () => {

	return (
		<main className="main">
			<Intro />
			<NavBar />
			<Content />
		</main>
	);
};

export default HomePage;
