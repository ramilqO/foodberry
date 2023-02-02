import { useState } from "react";
import InputMask from "react-input-mask";

interface Iinput {
	placeholder: string;
	name: string;
	required?: boolean;
	regex?: any;
	mask?: any;
	maskPlaceholder?: any;
}

const Input = ({
	placeholder,
	name,
	required,
	regex,
	mask,
	maskPlaceholder,
}: Iinput) => {
	const [value, setValue] = useState("");
	const [classValid, setClassValid] = useState("");

	const fooValidate = (value: string) => {
		if (regex) {
			let isValid = regex.test(value);

			setValue(value);
			console.log(value, isValid, regex);

			if (isValid) {
				setClassValid("valid");
			} else {
				setClassValid("invalid");
			}

			if (value === "") {
				setClassValid("");
			}
		}
	};

	return (
		<InputMask
			type="text"
			className={`input ${classValid}`}
			placeholder={placeholder}
			name={name}
			required={required}
			mask={mask}
			value={value}
			maskPlaceholder={maskPlaceholder}
			onChange={(e) => {
				fooValidate(e.target.value);
			}}
		/>
	);
};

export default Input;

