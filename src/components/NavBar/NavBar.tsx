import "./NavBar.scss";
import { useState } from "react";
import { food } from "../../dataBase";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
	const [isActive, setisActive] = useState(true);
	const [navMenu, setNavMenu] = useState(food);

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<ul className="navbar__list">
					{navMenu.map((item, index) => {
						return (
							<li
								className={`navbar__item ${
									isActive && "active"
								}`}
								key={item.menuTitle + index}
							>
								<HashLink
									to={"#" + item.id}
								>
									{item.menuTitle}
								</HashLink>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
