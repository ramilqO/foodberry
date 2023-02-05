import { Link } from "react-router-dom";
import "./CheckoutPage.scss";

import { useState} from "react";

// images
import notWorkImage from "../../images/notWork.png";

// functions

// components
import ContactInfo from "./ContactInfo";
import Delivery from "./Delivery";
import Pay from "./Pay";
import Time from "./Time";

const CheckoutFormPage = () => {

	const [isDelivery, setIsDelivery] = useState<boolean>(false);
	const [disabled, setDisabled] = useState(true)

	return (
		<main className="main main-checkoutPage">
			<section className="checkoutForm">
				<div className="checkoutForm__container">
					<Link className="checkoutForm__link" to={"cart"}>
						в корзину
					</Link>
					<h2 className="checkoutForm__title">Оформление заказа</h2>
					<div className="checkoutForm__wrapper">
						<div className="not-work">
							<div className="not-work__text">
								<p className="checkoutForm__subtitle">
									Сегодня мы уже не доставляем.
								</p>
								<p className="checkoutForm__subtitle">
									Заказы принимаем до 20:50, доставляем с 8:30
									до 21:30
								</p>
							</div>
							<div className="not-work__image">
								<img
									src={notWorkImage}
									alt="later working, not deliveries"
								/>
							</div>
						</div>

						<form className="checkoutForm__form">
							<ContactInfo />
							<Delivery isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
							<Pay />
							<Time/>

							<div className="checkoutForm__form-check">
								<button
									className="checkoutForm__submit"
									type="submit"
									disabled={disabled}
									onSubmit={(e) => {
										console.log(e);
									}}
								>
									Оформить заказ
								</button>
								<div className="policy-check">
									<input
										className="policy-check__input "
										type="checkbox"
										name="policy"
										id="policy"
									/>
									<label htmlFor="policy">
										Я согласен на обработку моих перс.
										данных в соответствии с{" "}
										<Link to={"policy"}>Условиями</Link>
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
};

export default CheckoutFormPage;
