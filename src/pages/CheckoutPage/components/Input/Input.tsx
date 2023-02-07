import { useState } from "react";
import InputMask from "react-input-mask";

interface Iinput {
	type?: string;
	name: string;
	required?: boolean;
	regex?: any;
	mask?: any;
	placeholder?: string;
	disabled?: any;
}

const Input = ({
	type,
	name,
	required,
	regex,
	mask,
	placeholder,
	disabled
}: Iinput) => {
	const [values, setValues] = useState("");
	const [classValid, setClassValid] = useState("");
	const [data, setData] = useState({})


	// const arrInputs: string[] = [];

	// const fooInputs = () => {
	// 	arrInputs.push('required')
	// 	console.log(arrInputs)
	// }

	let isValid: any;

	const fooValidate = (value: string) => {
		isValid = regex.test(value);

		setValues(value);
		console.log(value, isValid, regex);
		console.log(data)

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
			type={!type ? "text" : type}
			className={`input ${classValid}`}
			placeholder={placeholder}
			name={name}
			required={required}
			mask={mask}
			value={values}
			onChange={(e) => {
				fooValidate(e.target.value)

				setData({
					[e.target.name]: isValid
				})
			}}
		/>
	);
};

export default Input;

