// functions
import { regexAny, regexHouseNumber } from "./../../functions/regex";

import Input from "./Input";

const DeliveryForms = () => {

	return (
		<div className="tab-adress ">
			<p className="base-text checkoutForm__subtitle">
				Адрес доставки
			</p>
			<div className="input-adress">
				<Input
					name="street"
					placeholder="Укажите улицу&#42;"
					required
					regex={regexAny}
				/>
				<Input
					name="numberHouse"
					placeholder="Номер дома&#42;"
					required
					regex={regexHouseNumber}
				/>
				<Input
					name="numberOfficeFlat"
					placeholder="№ квартиры/офиса"
					required
					regex={regexAny}
				/>
				<Input
					name="entrance"
					placeholder="Подъезд"
					regex={regexAny}
				/>
				<Input
					name="floor"
					placeholder="Этаж"
					regex={regexAny}
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

