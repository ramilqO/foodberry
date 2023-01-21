import { Link } from "react-router-dom";
import "./CheckoutForm.scss";

const CheckoutForm = () => {
	return (
		<section className="checkoutForm">
			<div className="checkoutForm__container">
				<Link className="checkoutForm__link" to={"cart"}>
					в корзину
				</Link>
				<h2 className="checkoutForm__title">Оформление заказа</h2>
				<div className="checkoutForm__wrapper">
					<form className="checkoutForm__form">
						<div className="checkoutForm__form-contacts">
							<p className="base-text checkoutForm__subtitle">
								1. Контактная информация
							</p>
							<div className="input-contacts">
								<input type="text" placeholder="Имя" required />
								<input
									type="text"
									placeholder="Телефон"
									required
								/>
							</div>
						</div>
						<div className="checkoutForm__form-delivery">
							<p className="base-text checkoutForm__subtitle">
								2. Доставка
							</p>
							<div className="toggle-delivery">
								<span className="active">Доставка</span>
								<span>Самовывоз</span>
							</div>
							<span>Доставим через 1 час 30 минут</span>
							<p className="base-text checkoutForm__subtitle">
								Адрес доставки
							</p>
							<div className="input-contacts">
								<input
									type="text"
									placeholder="Укажите улицу"
								/>
								<input type="text" placeholder="Номер дома" />
								<input
									type="text"
									placeholder="№ квартиры/офиса"
								/>
								<input type="text" placeholder="Подъезд" />
								<input type="text" placeholder="Этаж" />
								<textarea placeholder="Комментарий" />
							</div>
						</div>
						<div className="checkoutForm__form-pay">
							<p className="base-text  checkoutForm__subtitle">
								3. Оплатить
							</p>
							<div className="toggle-pay">
								<span>Оплата онлайн</span>
								<span>Курьеру картой</span>
								<span>Наличными</span>
							</div>
							<span>Сдача с</span>
						</div>
						<div className="checkoutForm__form-deliveryTime">
							<p className="base-text  checkoutForm__subtitle">
								4. Когда доставить
							</p>
							<div className="toggle-checkTime">
								<span>В ближайшее время</span>
								<span>Ко времени</span>
							</div>
							<input type="text" placeholder="Укажите время" />
							<input type="text" placeholder="Кол-во персон" />
							<button type="button">-</button>
							<button type="button">+</button>
							<p className="base-text">Хотите мы позвоним?</p>
							<label htmlFor="notCall">Не перезванивать</label>
							<label htmlFor="callOperator">
								Потребуется звонок оператора
							</label>
							<input
								type="radio"
								name="callbackUs"
								id="notCall"
							/>
							<input
								type="radio"
								name="callbackUs"
								id="callOperator"
							/>
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
