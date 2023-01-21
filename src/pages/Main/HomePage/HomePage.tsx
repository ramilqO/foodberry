import "./HomePage.scss";
import NavBar from "../../../components/NavBar/NavBar";
import Intro from "../../../components/Intro/Intro";
import Content from "../../../components/Content/Content";
import Benefits from "../../../components/Benefits/Benefits";
import Map from "../../../components/Map/Map";

import { useState } from "react";

const HomePage = () => {

	const [activeSection, setActiveSection] = useState("coldSnackes");

	return (
		<main className="main">
			<Intro />
			<NavBar
				activeSection={activeSection}
			/>
			<Content
				setActiveSection={setActiveSection}
			/>
			<Benefits />
			<Map />
		</main>
	);
};

export default HomePage;
