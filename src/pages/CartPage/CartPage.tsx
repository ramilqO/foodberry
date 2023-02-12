import "./CartPage.scss";

import { Link } from "react-router-dom";

import Order from "../../components/CartPage/Order/Order";
import OfferCard from "../../components/CartPage/OfferCard/OfferCard";

const CartPage = () => {

	// let orders = JSON.parse(localStorage.getItem("cart") || '');

	return (
		<div className="cart-page">
			<div className="cart-page__wrapper">
				<div className="orders-amount">
					<Link to="/" className="go-back">
						&lt; к выбору блюда
					</Link>
					<br />
					<div className="orders-amount__wrapper">
						<span className="title-line"></span>
						<span className="orders-amount__path">Корзина</span>
						<span className="orders-counter">
							(в корзине n товаров)
						</span>
					</div>
				</div>

				<div className="orders">
					<div className="orders__wrapper">
						{/* orders.map(order => {}) */}
						<Order
						img=''
						name='Зилибобки с куирцей'
						weight='250'
						about='lorem ipsum dolor sit amet'
						price={870}
						/>
					</div>
				</div>

				<div className="dish-offers">
					<div className="dish-offers__title">
						<div className="title-line"></div> Добавить к заказу
					</div>

					<div className="dish-offers__wrapper">
						<OfferCard
							name="Пицца пеперонни с колбасой"
							price={1240}
						/>
						<OfferCard
							name="Пицца пеперонни с колбасой"
							price={1240}
						/>
						<OfferCard
							name="Пицца пеперонни с колбасой"
							price={1240}
						/>
						<OfferCard
							name="Пицца пеперонни с колбасой"
							price={1240}
						/>
					</div>
				</div>

				<hr className="dish-offers__divider" />

				<div className="place-order">
					<div className="place-order__wrapper">
						<div className="place-order__main-text">
							<p className="place-order__price-total">
								Итого:
								<span className="place-order__price">
									500 ₽
								</span>
							</p>
							<p className="place-order__subtitle">
								До бесплатной доставки не хватает: 10 ₽
							</p>
							<p className="place-order__subtitle-sm">
								Минимальная сумма заказа 1500 ₽
							</p>
						</div>
						<Link to='/checkout' className="place-order__place-btn">
							Оформить заказ
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
