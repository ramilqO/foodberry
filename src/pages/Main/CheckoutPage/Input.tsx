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
	const [isValid, setIsValid] = useState('');

	const fooValidate = (value: string) => {
		let reg = regex.test(value);
		setValue(value);

		if (reg) {
			setIsValid('valid');
		} else {
			setIsValid('invalid')
		}
	};

	return (
		<input
			type='text'
			className={`input-contacts__input input ${isValid}`}
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

