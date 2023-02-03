export const regexAny = new RegExp(/^[а-яА-ЯёЁa-zA-Z0-9]*/i);
export const regexName = new RegExp(/^[а-яА-ЯёЁa-zA-Z ]*$/i);
export const regexHouseNumber = new RegExp(/^[0-9]*$/i);

export const regexPhone = new RegExp(
		/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm
	);
