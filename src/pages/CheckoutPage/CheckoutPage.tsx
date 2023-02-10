import { Link } from "react-router-dom";
import "./CheckoutPage.scss";
import "./MediaQueries.scss";

import { useState, useEffect } from "react";

// images
import notWorkImage from "../../images/notWork.png";

// functions

// components
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Delivery from "./components/Delivery/Delivery";
import Pay from "./components/Pay/Pay";
import Time from "./components/Time/Time";

const CheckoutFormPage = () => {
	const [isDelivery, setIsDelivery] = useState<boolean>(false);
	const [disabled, setDisabled] = useState(true);
	const [isChecked, setIsChecked] = useState(false);

	let time;

	const timeToClose = () => {
		let currentTime: Date = new Date();
		let year = currentTime.getFullYear().toString();
		let month = currentTime.getMonth().toString();
		let day = currentTime.getDay().toString();
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		let seconds = currentTime.getSeconds();

		let hoursClose = '20';
		let minutesClose = '50';
		let secondsClose = '00';

		// let timeClose: Date = new Date(`${year}-0${month}-0${day}T${hoursClose}:${minutesClose}:${secondsClose }`);

		let timeClose: Date = new Date(`${year}-0${month}-0${day}T${hoursClose}:${minutesClose}:${secondsClose }`);

		let mili = currentTime.getTime();
		let mili2 = timeClose.getTime();

		let differentTime = Math.round((mili - mili2) / 1000 / 60 / 60 / 24 / 12);

		// console.log(mili, 'milliseconds')
		// console.log(mili2, 'milliseconds2')

		// console.log(differentTime, 'differentTime')

		// console.log(currentTime, 'currentTime')
		// console.log(timeClose, 'timeClose')

		// console.log(year, 'year')
		// console.log(month, 'month')
		// console.log(day, 'day')

		// console.log(hours, 'hours')
		// console.log(minutes, 'minutes')
		// console.log(seconds, 'seconds')

		// console.log(hoursClose, 'hoursClose')
		// console.log(minutesClose, 'minutesClose')
		// console.log(secondsClose, 'secondsClose')
	}

	useEffect(() => {
		timeToClose();
	}, []);

	return (
		<main className="main main-checkoutPage">
			<section className="checkoutForm">
				<div className="checkoutForm__container">
					<Link className="checkoutForm__link" to={"cart"}>
						в корзину
					</Link>
					<h2 className="checkoutForm__title">Оформление заказа</h2>
					<div className="checkoutForm__wrapper">
						{ time  ?
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
							: <div></div>
						}

						<form className="checkoutForm__form" onChange={(e: any) => {


							if (e.currentTarget.checkValidity() === false && isChecked === false) {
								e.preventDefault()
								setDisabled(true)
								console.log(e.currentTarget.checkValidity(), 'checkValidity = false')
							} else {
								setDisabled(false)
								console.log(e.currentTarget.checkValidity(), 'checkValidity = true')
							}
						}}>

							<ContactInfo  />
							<Delivery isDelivery={isDelivery} setIsDelivery={setIsDelivery} />
							<Pay />
							<Time />

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
										checked={isChecked}
										onChange={() =>
											setIsChecked(!isChecked)
										}
										required
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
