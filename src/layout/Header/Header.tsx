import "./Header.scss";
import { LocationIcon } from "../../icons/LocationIcon";
import { CallingIcon } from "../../icons/CallingIcon";
import { SearchIcon } from "../../icons/SearchIcon";
import { FoodDeliciousIcon } from "../../icons/FoodDeliciousIcon";
import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import { food } from "../../dataBase";
import { HashLink } from "react-router-hash-link";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navMenu, setNavMenu] = useState(food);

	return (
		<div className="header">
			<div className="header__container">
				<div
					className={`overlay overlay--${
						isOpen ? "opened" : "closed"
					}`}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				></div>
				<button
					className={`burger-wrapper burger-wrapper--${
						isOpen ? "opened" : "closed"
					}`}
					type="button"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<div
						className={`burger  js-burger--${
							isOpen ? "opened" : "closed"
						}`}
					>
						<span className="js-burger__span"></span>
						<span className="js-burger__span"></span>
						<span className="js-burger__span"></span>
					</div>
					<span className="burger__text">меню</span>
				</button>
				<nav className={`nav nav--${isOpen ? "opened" : "closed"}`}>
					<h2>Меню</h2>
					<ul className="nav__list">
						{navMenu.map((item, index) => {
							return (
								<li
									className={"nav__item"}
									key={index + item.menuTitle}
								>
									<FoodDeliciousIcon />
									<HashLink
										to={"#" + item.id}
										onClick={() => {
											setIsOpen(!isOpen);
										}}
									>
										{item.menuTitle}
									</HashLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="header__logo">
					<a href="#no_scroll" className="logo">
						L O G O S
					</a>
				</div>
				<div className="input-block header__input-block">
					<form className="input-block__form">
						<div className="input-block__decoration-image header__decoration-image">
							<LocationIcon />
						</div>
						<input
							type="search"
							className="input-search header__input"
							placeholder="Введите адрес доставки"
						/>
						<button
							type="submit"
							className="search-image header__search-image"
						>
							<SearchIcon />
						</button>
					</form>
				</div>

				<div className="contacts header__contacts">
					<a href="tel:+79175105759" className="contacts__link">
						<CallingIcon />
					</a>
					<div className="contacts__info header__contacts-info">
						<span className="contacts__text">Контакты:</span>
						<br />
						<a
							href="tel:+79175105759"
							className="contacts__link link"
						>
							+7 (917) 510-57-59
						</a>
					</div>
				</div>
				<Cart isHeader />
			</div>
		</div>
	);
};

export default Header;
