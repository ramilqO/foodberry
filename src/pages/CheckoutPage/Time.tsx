import { useState } from "react";

// components
import Input from "./Input";

const Time = () => {

	const [isTimeDate, setIsTimeDate] = useState(false);
	const [countPerson, setCountPerson] = useState(1);
	const [valuePerson, setValuePerson] = useState(1);

	const updateValue = (value: string): void => {
		const val = Number(value);
		setCountPerson(val);
	};

	return (
		<div className="checkoutForm__form-deliveryTime">
			<p className="base-text  checkoutForm__subtitle">
				4. Когда доставить
			</p>
			<div className="delivery-time">
				<div className="toggle-checkTime">
					<span
						className={`toggle-checkTime__span ${!isTimeDate ? "active" : ""
							}`}
						onClick={() => setIsTimeDate(false)}
					>
						В ближайшее время
					</span>
					<span
						className={`toggle-checkTime__span ${isTimeDate ? "active" : ""
							}`}
						onClick={() => setIsTimeDate(true)}
					>
						Ко времени
					</span>
				</div>

				<Input
					name="edd"
					placeholder="Укажите время"
				/>
			</div>

			<div className="count-person">
				<label
					className="personTitle"
					htmlFor="personTitle"
				>
					Кол-во персон
				</label>
				<input
					className="input"
					placeholder="Кол-во персон"
					id="personTitle"
					value={valuePerson}
					onChange={(e) =>
						updateValue(e.currentTarget.value)
					}
				/>
				<div className="count-wrap">
					<button
						type="button"
						className="count-wrap__button"
						onClick={() => {
							countPerson === 1
								? setValuePerson(1)
								: setValuePerson(
									(prev) =>
										Number(prev) - 1
								);
							countPerson === 1
								? setCountPerson(1)
								: setCountPerson(
									countPerson - 1
								);
						}}
					></button>
					<span className="count-wrap__num">
						{countPerson}
					</span>
					<button
						type="button"
						className="count-wrap__button"
						onClick={() => {
							setValuePerson(
								(prev) => Number(prev) + 1
							);
							setCountPerson(countPerson + 1);
						}}
					>
						+
					</button>
				</div>
			</div>
			<p className="base-text checkoutForm__subtitle">
				Хотите мы позвоним?
			</p>
			<div className="radio-wrapper">
				<div className="radio">
					<input
						className="radio__input"
						type="radio"
						name="callbackUs"
						id="notCall"
					/>
					<label htmlFor="notCall">
						Не перезванивать
					</label>
				</div>
				<div className="radio">
					<input
						className="radio__input"
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
	);
};

export default Time;




