import "./RulesOfDelivery.scss";

import Map from "../../components/Map/Map";

const RulesOfDelivery = () => {

	return (
		<main className="main">
			<section className="RulesOfDelivery">
				<div className="RulesOfDelivery__wrapper">
					<h1 className="">Условия доставки</h1>
					<div className="RulesOfDelivery__faqMap">
						<div className="RulesOfDelivery__questions">
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">У наших курьеров всегда должна быть сдача!
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div>
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">Вам что-то не довезли?
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div >
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">Не понравился продукт?
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div>
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">Если появились замечания
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div>
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">Оплата Visa, MasterCard и МИР
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div>
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div>
							<div className="RulesOfDelivery__question">
								<p className="RulesOfDelivery__answer">Реквизиты
								</p>
								<p className="RulesOfDelivery__answer">Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам</p>
							</div>
						</div>
						<Map />
					</div>

					<div className="RulesOfDelivery__timesWork">
						<div className="RulesOfDelivery__timesWork-text">
							<p className="RulesOfDelivery__subtitle">График работы доставки:</p>
							<span className="RulesOfDelivery__timesDate"> с 10:00-21:00</span>
						</div>
						<div className="RulesOfDelivery__timesWork-text">
							<p className="RulesOfDelivery__subtitle">График работы кафе:</p>
							<span className="RulesOfDelivery__timesDate">с 08:00-21:00</span>
						</div>



					</div>
					<div className="RulesOfDelivery__freeDelivery">
						<p className="RulesOfDelivery__subtitle">Минимальный заказ:</p>
						<p className="RulesOfDelivery__description">Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
							Доставка оператором такси от любой суммы заказа - по тарифам
							перевозчика.</p>
					</div>


				</div>

			</section>
		</main>

	)
};

export default RulesOfDelivery;
