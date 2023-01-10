import "./Cart.scss";
import { BuyIcon } from "../../icons/BuyIcon";

interface ICart {
	isHeader: boolean;
}

const Cart = ({ isHeader }: ICart) => {
	return (
		<button className={`cart ${isHeader ? "header__cart" : ""}`}>
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
