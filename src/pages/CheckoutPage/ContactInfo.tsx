// functions
import {
	regexName,
	regexPhone,
} from "./../../functions/regex";

// components
import Input from "./Input";

const ContactInfo = () => {
	return (
		<div className="checkoutForm__form-contacts">
			<p className="base-text checkoutForm__subtitle">
				1. Контактная информация
			</p>
			<div className="input-contacts">
				<Input
					placeholder="Имя&#42;"
					name="userName"
					regex={regexName}
					required
				/>
				<Input
					type="tel"
					placeholder="Телефон&#42;"
					name="userPhone"
					required
					regex={regexPhone}
					mask={"+7 (999) 999-99-99"}
				/>
			</div>
		</div>
	);
};

export default ContactInfo;
