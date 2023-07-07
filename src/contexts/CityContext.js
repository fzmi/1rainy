import React, { useState, createContext } from 'react';

export const CityContext = createContext();

export const CityProvider = props => {
	const [city, setCity] = useState({
		data: {},
		isLoaded: false,
		cityName: 'Sydney',
		isFutureLoaded: false,
		futureData: [],
	});

	return(
		<CityContext.Provider value={[city, setCity]}>
			{props.children}
		</CityContext.Provider>
	);
};