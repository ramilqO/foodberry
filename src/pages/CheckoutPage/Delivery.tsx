
// components
import { ClockIcon } from "./../../icons/ClockIcon";

import DeliverySelf from "./DeliverySelf";
import DeliveryForms from "./DeliveryForms";

interface IDelivery {
	isDelivery: boolean;
	setIsDelivery: (arg: boolean) => void
}

const Delivery = ({ isDelivery, setIsDelivery }: IDelivery) => {

	return (

		<div className="checkoutForm__form-delivery">
			<p className="base-text checkoutForm__subtitle">2. Доставка</p>
			<div className="delivery-time">
				<div className="toggle-delivery">
					<div className="delivery">
						<div className="delivery-tabs">
							<span
								className={`toggle-delivery__span-delivery ${isDelivery ? "active" : ""
									}`}
								onClick={() => setIsDelivery(true)}
							>
								Доставка
							</span>
							<span
								className={`toggle-delivery__span toggle-delivery__span-selfDelivery ${!isDelivery ? "active" : ""
									}`}
								onClick={() => setIsDelivery(false)}
							>
							Самовывоз
						</span>
						<div className={`time-clock ${!isDelivery ? "none" : ""}`}>
							<ClockIcon />
							<span className="base-text">
								Доставим через 1 час 30 минут
							</span>
						</div>
					</div>


					{
						!isDelivery ? <DeliverySelf /> : <DeliveryForms />
					}
				</div>
			</div>
		</div>
		</div >
	);
};

export default Delivery;

