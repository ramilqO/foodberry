// functions
import {
	regexName
} from "../../../../functions/regex";

// components
import Input from "../../components/Input/Input";

// styles

import "./ContactInfo.scss"

const ContactInfo = () => {
	return (
		<div className="ContactsInfo">
			<p className="base-text ContactsInfo__subtitle">
				1. Контактная информация
			</p>
			<div className="ContactsInfo__inputs">
				<Input
					placeholder="Имя&#42;"
					name="userName"
					pattern={regexName}
					required
					minLength={3}
				/>
				<Input
					type="tel"
					placeholder="Телефон&#42;"
					name="userPhone"
					required
					mask={"+7 (999) 999-99-99"}
					minLength={18}
				/>
			</div>
		</div>
	);
};

export default ContactInfo;
