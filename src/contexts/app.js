/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect } from 'react';
import { getAllPlayers } from '../services/players';
import { getAllPokemon } from '../services/pokemon';
import { getAllEvents } from '../services/events';
import { getAllFormats } from '../services/formats';
import { getAllCountries } from '../services/countries';
import { verifyToken } from '../services/auth';

const AppContext = createContext();

const AppProvider = (props) => {

	const [spoilers, setSpoilers] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState('/');
	const [players, setPlayers] = React.useState([]);
	const [pokemon, setPokemon] = React.useState([]);
	const [events, setEvents] = React.useState([]);
	const [formats, setFormats] = React.useState([]);
	const [countries, setCountries] = React.useState([]);
	const [user, setUser] = React.useState(null);

	useEffect(() => {
		(async () => {
			await verifyTokenAndSetUser();
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

	useEffect( () => {
		(async () => {
			await verifyTokenAndSetUser();
		})();
	}, [currentPage]);

	async function verifyTokenAndSetUser() {
		await verifyToken().then((res) => {
			if (res.success) {
				setUser(res.data);
			} else {
				setUser(null);
			}
		});
	}
  
	return (
		<AppContext.Provider value={{
			spoilers,
			setSpoilers,
			players,
			setPlayers,
			pokemon,
			events,
			formats,
			countries,
			user,
			setUser,
			currentPage,
			setCurrentPage
		}}>
			<>{props.children}</>
		</AppContext.Provider>
	);
};

const useApp = () => {
	return useContext(AppContext);
};

export { AppProvider, useApp };