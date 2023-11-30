/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect } from 'react';
import { getAllPlayers } from '../services/players';
import { getAllPokemon } from '../services/pokemon';
import { getAllEvents } from '../services/events';
import { getAllFormats } from '../services/formats';
import { getAllCountries } from '../services/countries';

const AppContext = createContext();

const AppProvider = (props) => {

	const [spoilers, setSpoilers] = React.useState(false);
	const [players, setPlayers] = React.useState([]);
	const [pokemon, setPokemon] = React.useState([]);
	const [events, setEvents] = React.useState([]);
	const [formats, setFormats] = React.useState([]);
	const [countries, setCountries] = React.useState([]);

	useEffect(() => {
		(async () => {
			const response = await getAllPlayers();
			setPlayers(response.data);
			const pokemonResponse = await getAllPokemon();
			setPokemon(pokemonResponse.data);
			const eventsResponse = await getAllEvents();
			setEvents(eventsResponse.data);
			const formatsResponse = await getAllFormats();
			setFormats(formatsResponse.data);
			const countriesResponse = await getAllCountries();
			setCountries(countriesResponse.data);
		})();
	}, []);
  
	return (
		<AppContext.Provider value={{
			spoilers,
			setSpoilers,
			players,
			setPlayers,
			pokemon,
			events,
			formats,
			countries
		}}>
			<>{props.children}</>
		</AppContext.Provider>
	);
};

const useApp = () => {
	return useContext(AppContext);
};

export { AppProvider, useApp };