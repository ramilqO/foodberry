import "./NavBar.scss";
import { useState } from "react";

const NavBar = () => {
	// const [isActive, setisActive] = useState(true);

	let isActive = true;

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<ul className="navbar__list">
					<li className={`navbar__item ${isActive && "active"}`}>
						<a href="#coldSnackes">Холодные закуски</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#hotShackes">Горячие закуски</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#meatDelicious">Мясные блюда</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#soups">Супы</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#fishDilicious">Рыбные блюда</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#grillMenu">Гриль меню</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#exsclusiveDelicious">Фирменные блюда</a>
					</li>
					<li className={`navbar__item ${isActive ? "active" : ""}`}>
						<a href="#drinks">Напитки</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
