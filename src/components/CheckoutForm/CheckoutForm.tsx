import { Link } from "react-router-dom";
import "./CheckoutForm.scss";

const CheckoutForm = () => {
	return (
		<section className="checkoutForm">
			<div className="checkoutForm__container">
				<Link to={"cart"}>в корзину</Link>
				<h2 className="checkoutForm__title">Оформление заказа</h2>
				<div className="checkoutForm__wrapper">
					<form className="checkoutForm__form">
						<div className="checkoutForm__form-contacts">
							<p className="base-text">
								1. Контактная информация
							</p>
							<input type="text" placeholder="Имя" />
							<input type="text" placeholder="Телефон" />
						</div>
						<div className="checkoutForm__form-delivery">
							<p className="base-text">2. Доставка</p>
							<div>
								<span>Доставка</span>
								<span>Самовывоз</span>
							</div>
						</div>
						<div className="checkoutForm__form-pay">
							<p className="base-text">3. Оплатить</p>
						</div>
						<div className="checkoutForm__form-deliveryTime">
							<p className="base-text">4. Когда доставить</p>
						</div>
						<div className="checkoutForm__form-check">
							<button>Оформить заказ</button>
							<label htmlFor="policy">
								Я согласен на обработку моих перс. данных в
								соответствии с{" "}
								<Link to={"policy"}>Условиями</Link>
							</label>
							<input type="checkbox" name="policy" id="policy" />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CheckoutForm;
