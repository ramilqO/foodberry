import "./Header.scss";

import { LocationIcon } from "../../icons/LocationIcon";
import { CallingIcon } from "../../icons/CallingIcon";
import { SearchIcon } from "../../icons/SearchIcon";
import { BuyIcon } from "../../icons/BuyIcon";
import { FoodDeliciousIcon } from "../../icons/FoodDeliciousIcon";
import React, { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="header">
			<div className="header__container">
				<div className={`overlay overlay--${isOpen ? 'opened' : 'closed'}`}></div>
				<button
					className={`burger-wrapper burger-wrapper--${isOpen ? 'opened' : 'closed'}`}
					type="button"
					onClick={() => {
						setIsOpen(!isOpen)
					}}
				>
					<div className={`burger  js-burger--${isOpen ? 'opened' : 'closed'}`}>
						<span className="js-burger__span"></span>
						<span className="js-burger__span"></span>
						<span className="js-burger__span"></span>
					</div>
					<span className="burger__text">меню</span>
				</button>
				<nav className={`nav nav--${isOpen ? 'opened' : 'closed'}`}>
					<h2>Меню</h2>
					<ul className="nav__list">
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#coldSnackes">Холодные закуски</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#hotShackes">Горячие закуски</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#meatDelicious">Мясные блюда</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#soups">Супы</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#fishDilicious">Рыбные блюда</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#grillMenu">Гриль меню</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#exsclusiveDelicious">Фирменные блюда</a>
						</li>
						<li className="nav__item">
							<FoodDeliciousIcon />
							<a href="#drinks">Напитки</a>
						</li>
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
							className='search-image header__search-image"'
						>
							<SearchIcon />
						</button>
					</form>
				</div>

				<div className="contacts header__contacts">
					<a
						href="tel:+79175105759"
						className="contacts__link"
					>
						<CallingIcon />
					</a>
					<div className="contacts__info header__contacts-info">
						<span className="contacts__text">
							Контакты:
						</span>
						<br />
						<a
							href="tel:+79175105759"
							className="contacts__link link"
						>
							+7 (917) 510-57-59
						</a>
					</div>
				</div>

				<button className="cart header__cart">
					<div className="buyIcon">
						<BuyIcon />
					</div>
					<span className="cart__text header__cart-text">
						Корзина
					</span>
					<div className="cart__counter-block header__cart-counter-block">
						<span className="cart__counter header__cart-counter">
							4
						</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Header;
