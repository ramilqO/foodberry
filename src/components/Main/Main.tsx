import "./Main.scss";
import NavBar from "../NavBar/NavBar";
import Intro from "../Intro/Intro";
import Content from "../Content/Content";

const Main = () => {
	return (
		<>
			<main className="main">
				<Intro />
				<NavBar />
				<Content />
			</main>
		</>
	);
};

export default Main;
