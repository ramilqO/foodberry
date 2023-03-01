import "./CartPage.scss";

import { Link } from "react-router-dom";

import Order from "../../components/CartPage/Order/Order";
import OfferCard from "../../components/CartPage/OfferCard/OfferCard";

import { food } from "../../dataBase";

const CartPage = () => {

	const dishItem = (max: number) => {
		return Math.floor(Math.random() * max);
	}

	const dishRandom = food.slice(0, dishItem(6));
	console.log(typeof dishRandom)
	console.log(typeof food)
	console.log(dishItem(6))

	const dish1: Array<object> = [];
	dish1.push(dishRandom)

	console.log(dish1)

	const renderOrders = () => {
		let orders: {
			img: string;
			name: string;
			weight: string;
			about: string;
			price: number;
		}[] = JSON.parse(localStorage.getItem("cart") || '');

		return orders.length >= 1 ? (
			orders.map((item, index) =>
				<Order
					img={item.name}
					name={item.name}
					weight={item.weight}
					about={item.about}
					price={item.price}
					key={index}
				/>)
		) : <h1>Вы не добавляли товаров в корзину</h1>
	}

	const renderDishes = () => {

		dish1.map((item: any, index: number) => {
			item.foods.map((dish: any, index: number)=>{
				return (
					<OfferCard
						name={dish.name}
						price={dish.price}
						img={dish.img}
						key={index}
					/>
				)
			})

		})
	}

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
						{renderOrders()}
					</div>
				</div>

				<div className="dish-offers">
					<div className="dish-offers__title">
						<div className="title-line"></div> Добавить к заказу
					</div>

					<div className="dish-offers__wrapper">{renderDishes()}</div>
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
