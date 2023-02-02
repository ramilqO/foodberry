import { useState } from "react";
import InputMask from "react-input-mask";

interface Iinput {
	type?: string;
	name: string;
	required?: boolean;
	regex?: any;
	mask?: any;
	placeholder?: string;
}

const Input = ({
	type,
	name,
	required,
	regex,
	mask,
	placeholder,
}: Iinput) => {
	const [values, setValues] = useState("");
	const [classValid, setClassValid] = useState("");

	const fooValidate = (value: string) => {
		let isValid = regex.test(value);

		setValues(value);
		console.log(value, isValid, regex);

		if (isValid) {
			setClassValid("valid");
		} else {
			setClassValid("invalid");
		}

		if (value === "") {
			setClassValid("");
		}
	};

	return (
		<InputMask
			type={!type ? 'text' :  type}
			className={`input ${classValid}`}
			placeholder={placeholder}
			name={name}
			required={required}
			mask={mask}
			value={values}
			onChange={(e) => {
				fooValidate(e.target.value);
			}}
		/>
	);
};

export default Input;

