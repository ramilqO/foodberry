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
		console.log(value, isValid)

		if (isValid) {
			setClassValid("valid");
		} else {
			setClassValid("invalid");
		}

		if (value === '') {
			setClassValid('')
		}
	};

	return (
		<input
			type="text"
			className={`input ${classValid}`}
			placeholder={placeholder}
			name={name}
			required={required}
			value={value}
			onChange={(e) => {
				fooValidate(e.target.value);
			}}
		/>
	);
};

export default Input;

