import React, { useState, useContext } from 'react';
import style from './SearchBar.module.scss';
import { CityContext } from '../../contexts/CityContext';
import { checkCityName } from '../../utils/validInput';

const SearchBar = () => {
	const [input, setInput] = useState('');
	const handleInput = (event) => {
		const inputValue = event.target?.value;
		if (inputValue !== '') {
			setInput(inputValue);
		}
	}

	const [city, setCity] = useContext(CityContext);
	const handleClick = () => {
		if (checkCityName(input)) {
			setCity({
				...city,
				cityName: input,
				isLoaded: false,
				isFutureLoaded: false,
			});
		}
	}

	return(
		<div className={style.searchWrapper}>
			<input placeholder='Find City' onChange={handleInput} />
			<button onClick={handleClick}>Search</button>
		</div>
	);
};

export default SearchBar;