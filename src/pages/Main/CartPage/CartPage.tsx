import "./CartPage.scss";

import { Link } from "react-router-dom";

import Order from "../../../components/CartPage/Order/Order";
import OfferCard from "../../../components/CartPage/OfferCard/OfferCard";

const CartPage = () => {
	return (
		<div className="cart-page">
			<div className="cart-page__wrapper">
				<div className="nav-path">
					<Link to="/" className="go-back">
						к выбору блюда
					</Link>
					<div className="nav-path__wrapper">
						<div className="line"></div>
						<span className="nav-path__path">Корзина</span>
						<span className="orders-counter">
							(в корзине n товаров)
						</span>
					</div>
				</div>

				<div className="orders">
					<div className="orders__wrapper">
						<Order />
						<Order />
					</div>
				</div>

				<div className="dish-offers">
					<span className="dish-offers__title">
						Добавить к заказу
					</span>

					<div className="dish-offers__wrapper"><OfferCard /><OfferCard /><OfferCard /><OfferCard /></div>
				</div>
				<hr />

				<div className="place-order">
					<div className="place-order__main-text">
						<span>Итого: 500 ₽</span>
						<p>До бесплатной доставки не хватает: 100 ₽</p>
						<p>Минимальная сумма заказа 1500 ₽</p>
					</div>

					<button className="place-order__main-text">
						Оформить заказ
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
