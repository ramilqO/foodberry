import "./RulesOfDelivery.scss";

import Map from "../../components/Map/Map";
import { useState } from "react";
import Arrow from "./Arrow";

const RulesOfDelivery = () => {
	const [isAnswer, setIsAnswer] = useState("");
	const [isArrow, setIsArrow] = useState(false);

	const dataBaseQuestions: {
		question: {
			title: string;
			subtitle: string;
	}}[] = [

		{
			question: {
				title: "У наших курьеров всегда должна быть сдача!",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
	]

	return (
		<main className="main">
			<section className="RulesOfDelivery">
				<div className="RulesOfDelivery__wrapper">
					<h1 className="RulesOfDelivery__title">Условия доставки</h1>
					<div className="RulesOfDelivery__faqMap">
						<div className="RulesOfDelivery__questions">

							{
								dataBaseQuestions.map((question, index) => {
									return (


										<div
											className="RulesOfDelivery__question"
											key={index}
										>
											<p className="RulesOfDelivery__answer">
												{question.question.title}
											</p>
											<p className="RulesOfDelivery__answer">
												{question.question.subtitle}
											</p>
										</div>



									)
								})
							}



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
