import { useRef, useState } from "react";

const Pay = () => {
	const windowSize = useRef([window.innerWidth]);
	const [activeTabPay, setActiveTabPay] = useState(0);

	return (
		<div className="checkoutForm__form-pay">
			<p className="base-text  checkoutForm__subtitle">
				3. Оплатить
			</p>
			<div className="toggle-pay">
				<span
					className={`toggle-pay__span ${activeTabPay === 1 ? "active" : ""
						}`}
					onClick={() => {
						setActiveTabPay(1);
					}}
				>
					{`${windowSize.current[0] >= 768
							? "Оплата онлайн"
							: "онлайн"
						}`}
				</span>
				<span
					className={`toggle-pay__span ${activeTabPay === 2 ? "active" : ""
						}`}
					onClick={() => {
						setActiveTabPay(2);
					}}
				>
					{`${windowSize.current[0] >= 768
							? "Курьеру картой"
							: "картой"
						}`}
				</span>
				<span
					className={`toggle-pay__span ${activeTabPay === 3 ? "active" : ""
						}`}
					onClick={() => {
						setActiveTabPay(3);
					}}
				>
					Наличными
				</span>
			</div>
			<span
				className={`form-pay-result ${activeTabPay === 3 ? "block" : ""
					} `}
			>
				Сдача с
			</span>
		</div>
	);
};

export default Pay;

