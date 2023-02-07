// functions
import {
	regexName,
	regexPhone,
} from "../../../../functions/regex";

// components
import Input from "../../components/Input/Input";

// styles

import "./ContactInfo.scss"

const ContactInfo = (disabled: any) => {
	return (
		<div className="ContactsInfo">
			<p className="base-text ContactsInfo__subtitle">
				1. Контактная информация
			</p>
			<div className="ContactsInfo__inputs">
				<Input
					placeholder="Имя&#42;"
					name="userName"
					regex={regexName}
					required
					disabled={disabled}
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
