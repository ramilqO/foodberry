import "./RulesOfDelivery.scss";

import Map from "../../components/Map/Map";
import { useState } from "react";
import Arrow from "./Arrow";

const RulesOfDelivery = () => {
	const [isAnswer, setIsAnswer] = useState("");
	const [isArrow, setIsArrow] = useState(false);

	return (
		<main className="main">
			<section className="RulesOfDelivery">
				<div className="RulesOfDelivery__wrapper">
					<h1 className="RulesOfDelivery__title">Условия доставки</h1>
					<div className="RulesOfDelivery__faqMap">
						<div className="RulesOfDelivery__questions">
							<div
								className="RulesOfDelivery__question"
								onClick={() => { setIsAnswer("answer_1"); setIsArrow(!isArrow) }}
							>
								<p className="RulesOfDelivery__answer">
									У наших курьеров всегда должна быть сдача!
								</p>
								{isAnswer === "answer_1" ? (
									<p className="RulesOfDelivery__answer">
										Мы очень внимательно следим за качеством
										нашей работы, поэтому, если у вас будут
										какие-либо замечания или предложения, то
										обязательно сообщайте их нам
									</p>
								) : (
									<p></p>
								)}
								<Arrow
									classNames={"RulesOfDelivery__arrow"}
									isArrow={isArrow}
								/>
							</div>
							<div
								className="RulesOfDelivery__question"
								onClick={() => { setIsAnswer("answer_2"); setIsArrow(!isArrow) }}
							>
								<p className="RulesOfDelivery__answer">
									Вам что-то не довезли?
								</p>
								{isAnswer === "answer_2" ? (
									<p className="RulesOfDelivery__answer">
										Мы очень внимательно следим за качеством
										нашей работы, поэтому, если у вас будут
										какие-либо замечания или предложения, то
										обязательно сообщайте их нам
									</p>
								) : (
									<p></p>
								)}
								<Arrow
									classNames={"RulesOfDelivery__arrow"}
									isArrow={isArrow}
								/>
							</div>
							<div
								className="RulesOfDelivery__question"
								onClick={() => { setIsAnswer("answer_3"); setIsArrow(!isArrow) }}
							>
								<p className="RulesOfDelivery__answer">
									Не понравился продукт?
								</p>
								{isAnswer === "answer_3" ? (
									<p className="RulesOfDelivery__answer">
										Мы очень внимательно следим за качеством
										нашей работы, поэтому, если у вас будут
										какие-либо замечания или предложения, то
										обязательно сообщайте их нам
									</p>
								) : (
									<p></p>
								)}
								<Arrow
									classNames={"RulesOfDelivery__arrow"}
									isArrow={isArrow}
								/>
							</div>
							<div
								className="RulesOfDelivery__question"
								onClick={() => { setIsAnswer("answer_4"); setIsArrow(!isArrow) }}
							>
								<p className="RulesOfDelivery__answer">
									Если появились замечания
								</p>
								{isAnswer === "answer_4" ? (
									<p className="RulesOfDelivery__answer">
										Мы очень внимательно следим за качеством
										нашей работы, поэтому, если у вас будут
										какие-либо замечания или предложения, то
										обязательно сообщайте их нам
									</p>
								) : (
									<p></p>
								)}
								<Arrow
									classNames={"RulesOfDelivery__arrow"}
									isArrow={isArrow}
								/>
							</div>
							<div
								className="RulesOfDelivery__question"
								onClick={() => { setIsAnswer("answer_5"); setIsArrow(!isArrow) }}
							>
								<p className="RulesOfDelivery__answer">
									Оплата Visa, MasterCard и МИР
								</p>
								{isAnswer === "answer_5" ? (
									<p className="RulesOfDelivery__answer">
										Мы очень внимательно следим за качеством
										нашей работы, поэтому, если у вас будут
										какие-либо замечания или предложения, то
										обязательно сообщайте их нам
									</p>
								) : (
									<p></p>
								)}
								<Arrow
									classNames={"RulesOfDelivery__arrow"}
									isArrow={isArrow}
								/>
							</div>
							<div
								className="RulesOfDelivery__question"
								onClick={() => { setIsAnswer("answer_6"); setIsArrow(!isArrow) }}
							>
								<p className="RulesOfDelivery__answer">
									Реквизиты
								</p>
								{isAnswer === "answer_6" ? (
									<p className="RulesOfDelivery__answer">
										Мы очень внимательно следим за качеством
										нашей работы, поэтому, если у вас будут
										какие-либо замечания или предложения, то
										обязательно сообщайте их нам
									</p>
								) : (
									<p></p>
								)}
								<Arrow
									classNames={"RulesOfDelivery__arrow"}
									isArrow={isArrow}
								/>
							</div>

						</div>
						<Map classNames="map RulesOfDelivery__map" />
					</div>

					<div className="RulesOfDelivery__timesWork">
						<div className="RulesOfDelivery__timesWork-text">
							<p className="RulesOfDelivery__subtitle">
								График работы доставки:
							</p>
							<span className="RulesOfDelivery__subtitle-about">
								{" "}
								с 10:00-21:00
							</span>
						</div>
						<div className="RulesOfDelivery__timesWork-text">
							<p className="RulesOfDelivery__subtitle">
								График работы кафе:
							</p>
							<span className="RulesOfDelivery__subtitle-about">
								с 08:00-21:00
							</span>
						</div>
					</div>
					<div className="RulesOfDelivery__freeDelivery">
						<p className="RulesOfDelivery__subtitle">
							Минимальный заказ:
						</p>
						<p className="RulesOfDelivery__subtitle-about">
							Бесплатная доставка пешим курьером при сумме заказа
							от 400 ₽ Доставка оператором такси от любой суммы
							заказа - по тарифам перевозчика.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default RulesOfDelivery;
