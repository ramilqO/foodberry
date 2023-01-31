import "./Cart.scss";
import { BuyIcon } from "../../icons/BuyIcon";

import { Link } from "react-router-dom";

const Cart = () => {
	return (
		<Link to="/cart" className="cart header__cart">
			<span className="buyIcon">
				<BuyIcon />
			</span>
			<span className="cart__text ">Корзина</span>
			<span className="cart__counter-block">
				<span className="cart__counter">4</span>
			</span>
		</Link>
	);
};

export default Cart;
