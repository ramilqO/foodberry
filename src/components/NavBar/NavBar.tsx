import "./NavBar.scss";
import { useState } from "react";
import { food } from "../../dataBase";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
	const [isActive, setisActive] = useState(true);

	return (
		<nav className="navbar">
			<div className="navbar__container">
				<ul className="navbar__list">
					{food.map((item) => {
						return (
							<li
								className={`navbar__item ${
									isActive && "active"
								}`}
								key={item.menuTitle}
							>
								<HashLink to={"#" + item.id}>
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
