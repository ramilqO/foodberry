import "./Main.scss";
import NavBar from "./../NavBar/NavBar";
import {useState} from 'react'


const Main = () => {
	const [isActive, setisActive] = useState(false)

	return (
		<main className="main">
			<NavBar
				isActive={isActive ? 'active' : ''}
			/>
		</main>
	);
};

export default Main;