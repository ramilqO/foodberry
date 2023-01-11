import './NavBar.scss';

interface INavBar {
	isActive: string;
	isString?: string;
}

const NavBar = ({isActive} : INavBar) => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<ul className="navbar__list">
					<li className={`navbar__item ${isActive}`}>
						<a href="#coldSnackes">Холодные закуски</a>
					</li>
					<li className="navbar__item">
						<a href="#hotShackes">Горячие закуски</a>
					</li>
					<li className="navbar__item">
						<a href="#meatDelicious">Мясные блюда</a>
					</li>
					<li className="navbar__item">
						<a href="#soups">Супы</a>
					</li>
					<li className="navbar__item">
						<a href="#fishDilicious">Рыбные блюда</a>
					</li>
					<li className="navbar__item">
						<a href="#grillMenu">Гриль меню</a>
					</li>
					<li className="navbar__item">
						<a href="#exsclusiveDelicious">Фирменные блюда</a>
					</li>
					<li className="navbar__item">
						<a href="#drinks">Напитки</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;