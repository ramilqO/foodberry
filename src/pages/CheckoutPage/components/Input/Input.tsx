import { useState } from "react";
import InputMask from "react-input-mask";

interface Iinput {
	type?: string;
	name: string;
	required?: boolean;
	pattern?: any;
	mask?: any;
	placeholder?: string;
}

const Input = ({
	type,
	name,
	required,
	pattern,
	mask,
	placeholder,
}: Iinput) => {
	const [values, setValues] = useState("");
	const [classValid, setClassValid] = useState("");


	// let isValid: any;

	// const fooValidate = (value: string) => {
	// 	isValid = regex.test(value);

	// 	setValues(value);
	// 	console.log(value, isValid, regex);


	// 	if (isValid) {
	// 		setClassValid("valid");
	// 	} else {
	// 		setClassValid("invalid");
	// 	}

	// 	if (value === "") {
	// 		setClassValid("");
	// 	}

	// 	console.log(data)
	// };

	return (
		<InputMask
			type={!type ? "text" : type}
			className={`input ${classValid}`}
			placeholder={placeholder}
			name={name}
			required={required}
			mask={mask}
			value={values}
			pattern={pattern}
			onChange={(e) => {
				setValues(e.target.value)
			}}
		/>
	);
};

export default Input;

// .................,,,,

// import "./styles.css";
// import { useState } from "react";
// import Input from "./Input";

// export default function App() {
// 	const [stateInputs, setStateInputs] = useState({
// 		phone: false,
// 		phone2: false
// 	});
// 	const [isDisabled, setIsDisabled] = useState(true);

// 	const checkIsDisabled = (name, value) => {
// 		// setStateInputs({ ...stateInputs, [name]: value });
// 		setStateInputs((prev) => {
// 			return { ...prev, [name]: value };
// 		});

// 		for (let field in stateInputs) {
// 			if (!stateInputs[field]) {
// 				setIsDisabled(true);
// 				return;
// 			}
// 		}
// 		setIsDisabled(false);
// 	};
// 	return (
// 		<form className="App">
// 			<Input
// 				type="text"
// 				placeholder="Телефон&#42;"
// 				name="phone"
// 				required
// 				regex={/^[0-9]*$/}
// 				checkIsDisabled={checkIsDisabled}
// 			/>
// 			<Input
// 				type="text"
// 				placeholder="Телефон&#42;"
// 				name="phone2"
// 				required
// 				regex={/^[0-9]*$/}
// 				checkIsDisabled={checkIsDisabled}
// 			/>
// 			<button disabled={isDisabled} type="submit">
// 				send
// 			</button>
// 		</form>
// 	);
// }

// import { useEffect, useState } from "react";
// // import InputMask from "react-input-mask";

// const Input = ({
// 	type,
// 	name,
// 	required,
// 	regex,
// 	placeholder,
// 	// stateInputs,
// 	checkIsDisabled
// }) => {
// 	const [values, setValues] = useState("");
// 	const [classValid, setClassValid] = useState("");
// 	console.log("input", name);
// 	// let isValid;

// 	const fooValidate = (value) => {
// 		let isValid = regex.test(value);
// 		setValues(value);
// 		if (isValid) {
// 			setClassValid("valid");

// 			checkIsDisabled(name, true);
// 		} else {
// 			setClassValid("invalid");
// 			checkIsDisabled(name, false);
// 		}
// 		if (value === "") {
// 			setClassValid("");
// 			checkIsDisabled(name, false);
// 		}
// 	};

// 	return (
// 		<input
// 			type={!type ? "text" : type}
// 			// className={input ${classValid}}
// 			placeholder={placeholder}
// 			name={name}
// 			required={required}
// 			value={values}
// 			onChange={(e) => {
// 				fooValidate(e.target.value);
// 			}}
// 		/>
// 	);
// };

// export default Input;
