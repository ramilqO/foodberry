import "./HomePage.scss";
import NavBar from "../../../components/NavBar/NavBar";
import Intro from "../../../components/Intro/Intro";
import Content from "../../../components/Content/Content";
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
			<Map />
		</main>
	);
};

export default HomePage;
