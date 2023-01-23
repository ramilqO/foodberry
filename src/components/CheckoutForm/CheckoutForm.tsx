import { Link } from "react-router-dom";
import "./CheckoutForm.scss";
import { ClockIcon } from './../../icons/ClockIcon';
import { useRef } from "react";

const CheckoutForm = () => {
	const windowSize = useRef([window.innerWidth]);

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
								<input
									className="input-contacts__input"
									type="text"
									placeholder="Имя"
									name="userName"
									required
								/>
								<input
									className="input-contacts__input"
									type="text"
									placeholder="Телефон"
									name="userPhone"
									required
								/>
							</div>
						</div>
						<div className="checkoutForm__form-delivery">
							<p className="base-text checkoutForm__subtitle">
								2. Доставка
							</p>
							<div className="delivery-time">
								<div className="toggle-delivery">
									<span className="toggle-delivery__span active">
										Доставка
									</span>
									<span className="toggle-delivery__span ">
										Самовывоз
									</span>
								</div>
								<div className="time-clock">
									<ClockIcon />
									<span className="base-text">
										Доставим через 1 час 30 минут
									</span>
								</div>
							</div>

							<p className="base-text checkoutForm__subtitle">
								Адрес доставки
							</p>
							<div className="input-adress">
								<input
									className="input-adress__input"
									type="text"
									placeholder="Укажите улицу"
									required
								/>
								<input
									className="input-adress__input"
									type="text"
									name="numberHouse"
									placeholder="Номер дома"
									required
								/>
								<input
									className="input-adress__input"
									type="text"
									placeholder="№ квартиры/офиса"
								/>
								<input
									className="input-adress__input"
									type="text"
									name="entrance"
									placeholder="Подъезд"
								/>
								<input
									className="input-adress__input"
									type="text"
									name="floor"
									placeholder="Этаж"
								/>
								<textarea
									className="input-adress__input"
									placeholder="Комментарий"
									autoComplete="off"
									maxLength={200}
									name="comment"
								/>
							</div>
						</div>
						<div className="checkoutForm__form-pay">
							<p className="base-text  checkoutForm__subtitle">
								3. Оплатить
							</p>
							<div className="toggle-pay">
								<span className="toggle-pay__span">
									{`${
										windowSize.current[0] >= 768
											? "Оплата онлайн"
											: "онлайн"
									}`}
								</span>
								<span className="toggle-pay__span">
									{`${
										windowSize.current[0] >= 768
											? "Курьеру картой"
											: "картой"
									}`}
								</span>
								<span className="toggle-pay__span active">
									Наличными
								</span>
							</div>
							<span className="form-pay-result">Сдача с</span>
						</div>
						<div className="checkoutForm__form-deliveryTime">
							<p className="base-text  checkoutForm__subtitle">
								4. Когда доставить
							</p>
							<div className="delivery-time">
								<div className="toggle-checkTime">
									<span className="toggle-checkTime__span active">
										В ближайшее время
									</span>
									<span className="toggle-checkTime__span">
										Ко времени
									</span>
								</div>
								<span className="span">
									<input
										type="text"
										placeholder="Укажите время"
									/>
								</span>
							</div>

							<div className="span">
								<input
									type="text"
									placeholder="Кол-во персон"
								/>
								<div className="count-wrap">
									<button
										type="button"
										className="count-wrap__button"
									></button>
									<span className="count-wrap__num">1</span>
									<button type="button">+</button>
								</div>
							</div>
							<p className="base-text checkoutForm__subtitle">
								Хотите мы позвоним?
							</p>
							<div className="radio-wrapper">
								<div className="radio">
									<input
										type="radio"
										name="notCall"
										id="notCall"
									/>
									<label htmlFor="notCall">
										Не перезванивать
									</label>
								</div>
								<div className="radio">
									<input
										type="radio"
										name="callbackUs"
										id="callOperator"
									/>
									<label htmlFor="callOperator">
										Потребуется звонок оператора
									</label>
								</div>
							</div>
						</div>
						<div className="checkoutForm__form-check">
							<button>Оформить заказ</button>
							<div className="policy-check">
								<input
									type="checkbox"
									name="policy"
									id="policy"
								/>
								<label htmlFor="policy">
									Я согласен на обработку моих перс. данных в
									соответствии с{" "}
									<Link to={"policy"}>Условиями</Link>
								</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default CheckoutForm;
