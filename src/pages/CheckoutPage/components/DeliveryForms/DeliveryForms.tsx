// functions
import { regexAny, regexHouseNumber } from "../../../../functions/regex";

import Input from "../Input/Input";

// styles
import "./DeliveryForms.scss"

const DeliveryForms = () => {

	return (
		<div className="tab-adress DeliveryForms">
			<p className="base-text DeliveryForms__subtitle">
				Адрес доставки
			</p>
			<div className="input-adress">
				<Input
					name="street"
					placeholder="Укажите улицу&#42;"
					required
					pattern={regexAny}
				/>
				<Input
					name="numberHouse"
					placeholder="Номер дома&#42;"
					required
					pattern={regexHouseNumber}
				/>
				<Input
					name="numberOfficeFlat"
					placeholder="№ квартиры/офиса"
					pattern={regexAny}
				/>
				<Input
					name="entrance"
					placeholder="Подъезд"
					pattern={regexAny}
				/>
				<Input
					name="floor"
					placeholder="Этаж"
					pattern={regexAny}
				/>
				<textarea
					className="input-adress__input  input"
					placeholder="Комментарий"
					autoComplete="off"
					maxLength={200}
					name="comment"
				/>
			</div>
		</div>
	);
};

export default DeliveryForms;

