import "./Cart.scss";
import { BuyIcon } from "../../icons/BuyIcon";

import { Link } from "react-router-dom";

const Cart = () => {
	return (
			<button className="cart header__cart">
				<div className="buyIcon">
					<BuyIcon />
				</div>
				<span className="cart__text ">Корзина</span>
				<div className="cart__counter-block">
					<span className="cart__counter">4</span>
				</div>
			</button>
	);
};

export default Cart;
