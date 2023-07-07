export const checkCityName = (input) => {
	const VALID_REGREX = /^[A-Za-z]*$/;
	return VALID_REGREX.test(input);
};