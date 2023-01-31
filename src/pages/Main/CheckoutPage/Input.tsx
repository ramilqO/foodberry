import { useState } from "react";

interface Iinput {
	placeholder: string;
	name: string;
	required?: boolean;
	regex?: any;
}

const Input = (
	{
	placeholder,
	name,
	required,
	regex} : Iinput
) => {

	const [value, setValue] = useState("");
	const [classValid, setClassValid] = useState('');

	const fooValidate = (value: string) => {
		let isValid = regex.test(value);
		setValue(value);

		if (isValid) {
			setClassValid("valid");
		} else {
			setClassValid("invalid");
		}
	};

	return (
		<input
			type="text"
			className={`input-contacts__input input ${classValid}`}
			placeholder={placeholder}
			name={name}
			required={required}
			value={value}
			onChange={(e) => {
				fooValidate(e.target.value);
				if (name === 'userPhone') {

				}
			}}
		/>
	);
};

export default Input;

