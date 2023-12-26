import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useApp } from '../contexts/app';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button';
import { addEvent } from '../services/events';
import { addPlayer } from '../services/players';
import { addNewMatch } from '../services/matches';
//import Image from 'react-bootstrap/Image';

export default function AddMatch() {
	// eslint-disable-next-line no-unused-vars
	const {events, formats, countries, pokemon, players, user, setCurrentPage} = useApp();

	setCurrentPage('/add');

	if (user == null) {
		return (
			<Alert variant="danger">
				You are not allowed to see this page! Please Login!
			</Alert>
		);
	} 

	const [tournament, setTournament] = React.useState(-1);
	const [tournamentName, setTournamentName] = React.useState('');
	// eslint-disable-next-line no-unused-vars
	const [tournamentStartDate, setTournamentStartDate] = React.useState();
	// eslint-disable-next-line no-unused-vars
	const [tournamentEndDate, setTournamentEndDate] = React.useState();
	// eslint-disable-next-line no-unused-vars
	const [format, setFormat] = React.useState(-1);
	const [location, setLocation] = React.useState('');
	// eslint-disable-next-line no-unused-vars
	const [country, setCountry] = React.useState(-1);

	const [player1, setPlayer1] = React.useState(-1);

	const [player1Name, setPlayer1Name] = React.useState('');

	const [player1Twitter, setPlayer1Twitter] = React.useState('');

	const [player1Country, setPlayer1Country] = React.useState(-1);

	const [player1Caster, setPlayer1Caster] = React.useState(false);

	const [player2, setPlayer2] = React.useState(-1);

	const [player2Name, setPlayer2Name] = React.useState('');

	const [player2Twitter, setPlayer2Twitter] = React.useState('');

	const [player2Country, setPlayer2Country] = React.useState(-1);

	const [player2Caster, setPlayer2Caster] = React.useState(false);

	const [caster1, setCaster1] = React.useState(-1);

	const [caster1Name, setCaster1Name] = React.useState('');

	const [caster1Twitter, setCaster1Twitter] = React.useState('');

	const [caster1Country, setCaster1Country] = React.useState(-1);

	const [caster2, setCaster2] = React.useState(-1);

	const [caster2Name, setCaster2Name] = React.useState('');

	const [caster2Twitter, setCaster2Twitter] = React.useState('');

	const [caster2Country, setCaster2Country] = React.useState(-1);

	// eslint-disable-next-line no-unused-vars
	const [pokemonP1Names, setPokemonP1Names] = React.useState([{id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''} ]);

	// eslint-disable-next-line no-unused-vars
	const [pokemonP2Names, setPokemonP2Names] = React.useState([{id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''}, {id: -1, name: ''} ]);

	const [pokemonP1LeadG1, setPokemonP1LeadG1] = React.useState([0, 0, 0, 0]);

	const [pokemonP2LeadG1, setPokemonP2LeadG1] = React.useState([0, 0, 0, 0]);

	const [pokemonP1LeadG2, setPokemonP1LeadG2] = React.useState([0, 0, 0, 0]);

	const [pokemonP2LeadG2, setPokemonP2LeadG2] = React.useState([0, 0, 0, 0]);

	const [pokemonP1LeadG3, setPokemonP1LeadG3] = React.useState([0, 0, 0, 0]);

	const [pokemonP2LeadG3, setPokemonP2LeadG3] = React.useState([0, 0, 0, 0]);

	const [hadG2, setHadG2] = React.useState(false);

	const [hadG3, setHadG3] = React.useState(false);

	const [url, setURL] = React.useState('');

	// eslint-disable-next-line no-unused-vars
	const [matchDate, setMatchDate] = React.useState();

	// eslint-disable-next-line no-unused-vars
	const [ageDivision, setAgeDivision] = React.useState('M');

	// eslint-disable-next-line no-unused-vars
	const [round, setRound] = React.useState('');

	function changeTournamentStartDate(e) {
		setTournamentStartDate(e.target.value);
		setMatchDate(e.target.value);
	}

	function changeTournamentEndDate(e) {
		//TODO
		//CHECK if Data is Valid
		setTournamentEndDate(e.target.value);
	}

	function changePokemonP1(e, index){
		let temp = [...pokemonP1Names];
		temp[index] = {id: e.target.value, name: e.target.selectedOptions[0].innerHTML};
		setPokemonP1Names(temp);
	}

	function changePokemonP2(e, index){
		let temp = [...pokemonP2Names];
		temp[index] = {id: e.target.value, name: e.target.selectedOptions[0].innerHTML};
		setPokemonP2Names(temp);
	}

	function changeP1LeadG1(e, index) {
		let temp = [...pokemonP1LeadG1];
		temp[index] = e.target.value;
		setPokemonP1LeadG1(temp);
	}

	function changeP2LeadG1(e, index) {
		let temp = [...pokemonP2LeadG1];
		temp[index] = e.target.value;
		setPokemonP2LeadG1(temp);
	}

	function changeP1LeadG2(e, index) {
		let temp = [...pokemonP1LeadG2];
		temp[index] = e.target.value;
		setPokemonP1LeadG2(temp);
	}

	function changeP2LeadG2(e, index) {
		let temp = [...pokemonP2LeadG2];
		temp[index] = e.target.value;
		setPokemonP2LeadG2(temp);
	}

	function changeP1LeadG3(e, index) {
		let temp = [...pokemonP1LeadG3];
		temp[index] = e.target.value;
		setPokemonP1LeadG3(temp);
	}

	function changeP2LeadG3(e, index) {
		let temp = [...pokemonP2LeadG3];
		temp[index] = e.target.value;
		setPokemonP2LeadG3(temp);
	}

	async function submitData() {
		let tournamentToSubmit = tournament;
		if (tournament == 0) {
			try {
				//TODO
				let newTournament = await addEvent({name: tournamentName, start_date: tournamentStartDate, end_date: tournamentEndDate, location: location, format: format, country: country});
				// eslint-disable-next-line no-unused-vars
				tournamentToSubmit = newTournament[0];
			//Submit New Tournament
			} catch (error) {
				console.log(error);
				return;
			}
			
		}
		let player1ToSubmit = player1;
		if (player1 == 0) {
			try {
				//TODO
				let newPlayer = await addPlayer({player_name: player1Name, nickname: player1Twitter, country_id: player1Country, is_caster: player1Caster ? 1 : 0});
				// eslint-disable-next-line no-unused-vars
				player1ToSubmit = newPlayer[0];
			//Submit New Player
			} catch (error) {
				alert('Error adding player 1');
				console.log(error);
				return;
			}
			
		}
		let player2ToSubmit = player2;
		if (player2 == 0) {
			try {
				//TODO
				let newPlayer = await addPlayer({player_name: player2Name, nickname: player2Twitter, country_id: player2Country, is_caster: player2Caster ? 1 : 0});
				// eslint-disable-next-line no-unused-vars
				player2ToSubmit = newPlayer[0];
			//Submit New Player
			} catch (error) {
				alert('Error adding player 2');
				console.log(error);
				return;
			}
			
		}
		let caster1ToSubmit = caster1;
		if (caster1 == 0) {
			try {
				//TODO
				let newPlayer = await addPlayer({player_name: caster1Name, nickname: caster1Twitter, country_id: caster1Country, is_caster: 1});
				// eslint-disable-next-line no-unused-vars
				caster1ToSubmit = newPlayer[0];
			//Submit New Caster
			} catch (error) {
				alert('Error adding caster 1');
				console.log(error);
				return;
			}
			
		}
		let caster2ToSubmit = caster2;
		if (caster2 == 0) {
			try {
				//TODO
				let newPlayer = await addPlayer({player_name: caster2Name, nickname: caster2Twitter, country_id: caster2Country, is_caster: 1});
				// eslint-disable-next-line no-unused-vars
				caster2ToSubmit = newPlayer[0];
			//Submit New Caster
			} catch (error) {
				alert('Error adding caster 2');
				console.log(error);
				return;
			}
			
		}
		if (!hadG2){
			setPokemonP1LeadG2([-1, -1, -1, -1]);
			setPokemonP2LeadG3([-1, -1, -1, -1]);
		}

		if (!hadG3){
			setPokemonP1LeadG3([-1, -1, -1, -1]);
			setPokemonP2LeadG3([-1, -1, -1, -1]);
		}
		//TODO
		try {
			let newMatch = await addNewMatch({
				event_id: tournamentToSubmit,
				date: matchDate,
				round: round,
				age_division: ageDivision,
				id_player1: player1ToSubmit,
				id_player2: player2ToSubmit,
				id_caster1: caster1ToSubmit,
				id_caster2: caster2ToSubmit,
				pokemon1_p1: pokemonP1Names[0].id,
				pokemon2_p1: pokemonP1Names[1].id,
				pokemon3_p1: pokemonP1Names[2].id,
				pokemon4_p1: pokemonP1Names[3].id,
				pokemon5_p1: pokemonP1Names[4].id,
				pokemon6_p1: pokemonP1Names[5].id,
				pokemon1_p2: pokemonP2Names[0].id,
				pokemon2_p2: pokemonP2Names[1].id,
				pokemon3_p2: pokemonP2Names[2].id,
				pokemon4_p2: pokemonP2Names[3].id,
				pokemon5_p2: pokemonP2Names[4].id,
				pokemon6_p2: pokemonP2Names[5].id,
				lead1_p1_g1: pokemonP1LeadG1[0],
				lead2_p1_g1: pokemonP1LeadG1[1],
				back1_p1_g1: pokemonP1LeadG1[2],
				back2_p1_g1: pokemonP1LeadG1[3],
				lead1_p2_g1: pokemonP2LeadG1[0],
				lead2_p2_g1: pokemonP2LeadG1[1],
				back1_p2_g1: pokemonP2LeadG1[2],
				back2_p2_g1: pokemonP2LeadG1[3],
				lead1_p1_g2: pokemonP1LeadG2[0],
				lead2_p1_g2: pokemonP1LeadG2[1],
				back1_p1_g2: pokemonP1LeadG2[2],
				back2_p1_g2: pokemonP1LeadG2[3],
				lead1_p2_g2: pokemonP2LeadG2[0],
				lead2_p2_g2: pokemonP2LeadG2[1],
				back1_p2_g2: pokemonP2LeadG2[2],
				back2_p2_g2: pokemonP2LeadG2[3],
				lead1_p1_g3: pokemonP1LeadG3[0],
				lead2_p1_g3: pokemonP1LeadG3[1],
				back1_p1_g3: pokemonP1LeadG3[2],
				back2_p1_g3: pokemonP1LeadG3[3],
				lead1_p2_g3: pokemonP2LeadG3[0],
				lead2_p2_g3: pokemonP2LeadG3[1],
				back1_p2_g3: pokemonP2LeadG3[2],
				back2_p2_g3: pokemonP2LeadG3[3],
				video_url: url
			});
			//Submit all Info
	
			if (newMatch) {
				alert('Match Added!');
			} else {
				alert('Error adding match');
			}
		} catch (error) {
			console.log(error);
		}	
	}

	// eslint-disable-next-line no-unreachable
	return (
		<Container>
			<Form>
				<h2>Where is this Tournament?</h2>
				<Row>
					<Col className='formDivs'>
						<Form.Select name='tournamentID' className='formDivs' aria-label="Select a Tournament" onChange={(e) => setTournament(e.target.value)}>
							<option value="-1">Select a tournament</option>
							{events.map((event) => {
								return <option key={event.id} value={event.id} >{event.name}</option>;
							})}
							<option value='0'>Add a new tournament</option>
						</Form.Select>
					</Col>
				</Row>
				{tournament == 0 && (
					<>
						<h3>New tournament Info</h3>
						<Row>
							<Col className='formDivs'>
								<Form.Group  className="mb-3 px-0" controlId="newTournamentName">
									<FloatingLabel
										controlId="tournamentName"
										label="New Tournament Name"
										className="mb-3">
										<Form.Control type="text" name="tournamentName" value={tournamentName} onChange={(e) => setTournamentName(e.target.value)} />
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col className='formDivs'>
								<Form.Group className="mb-3" controlId="tournamentStartDate">
									<FloatingLabel
										controlId="tournamentStartDate"
										label="Tournament Start Date"
										id="tournamentStartDate"
										className="mb-3">
										<Form.Control
											type="date"
											placeholder='YYYY-MM-DD'
											name="tournamentStartDate"
											onChange={(e) => changeTournamentStartDate(e)}
										/>
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col className='formDivs'>
								<Form.Group className="mb-3" controlId="tournamentEndDate">
									<FloatingLabel
										controlId="tournamentEndDate"
										label="Tournament End Date"
										id="tournamentEndDate"
										className="mb-3">
										<Form.Control
											type="date"
											name="tournamentEndDate"
											onChange={(e) => changeTournamentEndDate(e)}
										/>
									</FloatingLabel>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col className='formDivs'>
								<Form.Group className='p-0' controlId="tournamentLocation">
									<FloatingLabel
										controlId="tournamentLocation"
										label="Tournament Location">
										<Form.Control name="tournamentLocation" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" name="tournamentFormat" aria-label="Select a Format" onChange={(e) => setFormat(e.target.value)}>
									<option value="-1">Select a Format</option>
									{formats.map((format) => {
										return <option key={format.id} value={format.id} >{format.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" name="tournamentCountry" aria-label="Select a Country" onChange={(e) => setCountry(e.target.value)}>
									<option value="-1">Select a Country</option>
									{countries.map((country) => {
										return <option key={country.id} value={country.id} >{country.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
					</>
				)}
				{(true) && (
					<>
						<h3>Players Info</h3>
						<h4>Player 1</h4>
						<Row>
							<Col className='formDivs'>
								<Form.Select className='formDivs' aria-label="Select a Player" onChange={(e) => setPlayer1(e.target.value)}>
									<option value="-1">Select a Player</option>
									<option value='0'>Add a new player</option>
									{players.map((player) => {
										return <option key={player.id} value={player.id} >{player.player_name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						{player1 == 0 && (
							<Row>
								<Col className='formDivs'>
									<Form.Group  className="mb-3 px-0" controlId="newPlayer1Name">
										<FloatingLabel
											controlId="player1Name"
											label="New Player Name"
											className="mb-3">
											<Form.Control type="text" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Group  className="mb-3" controlId="newPlayer1Twitter">
										<FloatingLabel
											controlId="player1Twitter"
											label="New Player X/Twitter (without @)"
											className="mb-3">
											<Form.Control type="text" value={player1Twitter} onChange={(e) => setPlayer1Twitter(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Select size="lg" aria-label="Select a Country" onChange={(e) => setPlayer1Country(e.target.value)}>
										<option value="-1">Select a Country</option>
										{countries.map((country) => {
											return <option key={country.id} value={country.id} >{country.name}</option>;
										})}
									</Form.Select>
								</Col>
								<Col>
									<Form.Group className="mb-3" controlId="player1caster">
										<Form.Check 
											type="switch"
											id="player1caster"
											label="Is this player also a caster?"
											checked={player1Caster}
											onChange={() => setPlayer1Caster(!player1Caster)}
										/>
									</Form.Group>
								</Col>	
							</Row>
						)}
						<h4>Player 2</h4>
						<Row>
							<Col className='formDivs'>
								<Form.Select className='formDivs' aria-label="Select a Player" onChange={(e) => setPlayer2(e.target.value)}>
									<option value="-1">Select a Player</option>
									<option value='0'>Add a new player</option>
									{players.map((player) => {
										return <option key={player.id} value={player.id} >{player.player_name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						{player2 == 0 && (
							<Row>
								<Col className='formDivs'>
									<Form.Group  className="mb-3 px-0" controlId="newPlayer2Name">
										<FloatingLabel
											controlId="player2Name"
											label="New Player Name"
											className="mb-3">
											<Form.Control type="text" value={player2Name} onChange={(e) => setPlayer2Name(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Group  className="mb-3" controlId="newPlayer2Twitter">
										<FloatingLabel
											controlId="player2Twitter"
											label="New Player X/Twitter (without @)"
											className="mb-3">
											<Form.Control type="text" value={player2Twitter} onChange={(e) => setPlayer2Twitter(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Select size="lg" aria-label="Select a Country" onChange={(e) => setPlayer2Country(e.target.value)}>
										<option value="-1">Select a Country</option>
										{countries.map((country) => {
											return <option key={country.id} value={country.id} >{country.name}</option>;
										})}
									</Form.Select>
								</Col>
								<Col>
									<Form.Group className="mb-3" controlId="player2caster">
										<Form.Check 
											type="switch"
											id="player2caster"
											label="Is this player also a caster?"
											checked={player2Caster}
											onChange={() => setPlayer2Caster(!player2Caster)}
										/>
									</Form.Group>
								</Col>	
							</Row>
						)}
						<h4>Caster 1</h4>
						<Row>
							<Col className='formDivs'>
								<Form.Select className='formDivs' aria-label="Select a Player" onChange={(e) => setCaster1(e.target.value)}>
									<option value="-1">Select a Caster</option>
									<option value='0'>Add a new Caster</option>
									{players.map((player) => {
										if (player.is_caster == 1) {
											return <option key={player.id} value={player.id} >{player.player_name}</option>;
										}
									})}
								</Form.Select>
							</Col>
						</Row>
						{caster1 == 0 && (
							<Row>
								<Col className='formDivs'>
									<Form.Group  className="mb-3 px-0" controlId="newCaster1Name">
										<FloatingLabel
											controlId="caster1Name"
											label="New Caster Name"
											className="mb-3">
											<Form.Control type="text" value={caster1Name} onChange={(e) => setCaster1Name(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Group  className="mb-3" controlId="newCaster1Twitter">
										<FloatingLabel
											controlId="caster1Twitter"
											label="New Caster X/Twitter (without @)"
											className="mb-3">
											<Form.Control type="text" value={caster1Twitter} onChange={(e) => setCaster1Twitter(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Select size="lg" aria-label="Select a Country" onChange={(e) => setCaster1Country(e.target.value)}>
										<option value="-1">Select a Country</option>
										{countries.map((country) => {
											return <option key={country.id} value={country.id} >{country.name}</option>;
										})}
									</Form.Select>
								</Col>
							</Row>
						)}
						<h4>Caster 2</h4>
						<Row>
							<Col className='formDivs'>
								<Form.Select className='formDivs' aria-label="Select a Player" onChange={(e) => setCaster2(e.target.value)}>
									<option value="-1">Select a Caster</option>
									<option value='0'>Add a new Caster</option>
									{players.map((player) => {
										if (player.is_caster == 1) {
											return <option key={player.id} value={player.id} >{player.player_name}</option>;
										}
									})}
								</Form.Select>
							</Col>
						</Row>
						{caster2 == 0 && (
							<Row>
								<Col className='formDivs'>
									<Form.Group  className="mb-3 px-0" controlId="newCaster2Name">
										<FloatingLabel
											controlId="caster2Name"
											label="New Caster Name"
											className="mb-3">
											<Form.Control type="text" value={caster2Name} onChange={(e) => setCaster2Name(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Group  className="mb-3" controlId="newCaster2Twitter">
										<FloatingLabel
											controlId="caster2Twitter"
											label="New Caster X/Twitter (without @)"
											className="mb-3">
											<Form.Control type="text" value={caster2Twitter} onChange={(e) => setCaster2Twitter(e.target.value)} />
										</FloatingLabel>
									</Form.Group>
								</Col>
								<Col className='formDivs'>
									<Form.Select size="lg" aria-label="Select a Country" onChange={(e) => setCaster2Country(e.target.value)}>
										<option value="-1">Select a Country</option>
										{countries.map((country) => {
											return <option key={country.id} value={country.id} >{country.name}</option>;
										})}
									</Form.Select>
								</Col>
							</Row>
						)}
					</>
				)
				}
				{(true) && (
					<>
						<h3>Match Info</h3>
						<h4>Pokémon Player 1</h4>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP1(e,0)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP1(e,1)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP1(e,2)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP1(e,3)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP1(e,4)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP1(e,5)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<h4>Pokémon Player 2</h4>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP2(e,0)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP2(e,1)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP2(e,2)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP2(e,3)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP2(e,4)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changePokemonP2(e,5)}>
									<option value="-1">Select a Pokémon</option>
									{pokemon.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
					</>
				)}
				{(!(pokemonP1Names.some(item => item.id == -1)) && !(pokemonP2Names.some(item => item.id == -1))) && (
					<>
						<h3>{'Game 1 Leads/Backs  (Leave Blank if a Pokémon didn\'t appeared in a match)'}</h3>
						<h5>Player 1</h5>
						<h6>Lead</h6>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG1(e, 0)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP1Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG1(e, 1)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP1Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<h6>Back</h6>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG1(e, 2)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP1Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG1(e, 3)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP1Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<h5>Player 2</h5>
						<h6>Lead</h6>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG1(e, 0)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP2Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG1(e, 1)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP2Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<h6>Back</h6>
						<Row>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG1(e, 2)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP2Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col className='formDivs'>
								<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG1(e, 3)}>
									<option value="0">Select a Pokémon</option>
									{pokemonP2Names.map((pokemonSelected) => {
										return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="g2">
									<Form.Check 
										type="switch"
										id="g2"
										label="Did this game had a G2"
										checked={hadG2}
										onChange={() => setHadG2(!hadG2)}
									/>
								</Form.Group>
							</Col>	
						</Row>
						{hadG2 && (
							<>
								<h3>{'Game 2 Leads/Backs  (Leave Blank if a Pokémon didn\'t appeared in a match)'}</h3>
								<h5>Player 1</h5>
								<h6>Lead</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG2(e, 0)}>
											<option value="-1">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG2(e, 1)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<h6>Back</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG2(e, 2)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG2(e, 3)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<h5>Player 2</h5>
								<h6>Lead</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG2(e, 0)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG2(e, 1)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<h6>Back</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG2(e, 2)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG2(e, 3)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="g3">
											<Form.Check 
												type="switch"
												id="g3"
												label="Did this game had a G3"
												checked={hadG3}
												onChange={() => setHadG3(!hadG3)}
											/>
										</Form.Group>
									</Col>	
								</Row>
							</>
						)
						}
						{hadG3 && (
							<>
								<h3>Game 3 Leads/Backs (Leave Blank if no G3 happened)</h3>
								<h5>Player 1</h5>
								<h6>Lead</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG3(e, 0)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG3(e, 1)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<h6>Back</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG3(e, 2)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP1LeadG3(e, 3)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP1Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<h5>Player 2</h5>
								<h6>Lead</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG3(e, 0)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG3(e, 1)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
								<h6>Back</h6>
								<Row>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG3(e, 2)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
									<Col className='formDivs'>
										<Form.Select size="lg" aria-label="Select a Pokémon" onChange={(e) => changeP2LeadG3(e, 3)}>
											<option value="0">Select a Pokémon</option>
											{pokemonP2Names.map((pokemonSelected) => {
												return <option key={pokemonSelected.id} value={pokemonSelected.id} >{pokemonSelected.name}</option>;
											})}
										</Form.Select>
									</Col>
								</Row>
							</>
						)}
					</>
				)}
				{(true) && (
					<>
						<h3>Match Info</h3>
						<Row>
							<Col className='formDivs'>
								<h6>Age Division</h6>
								<Form.Check
									inline
									label="Juniors"
									name="ageDivision"
									type='radio'
									id='ageDivisonJR'
									onChange={() => setAgeDivision('J')} />
								<Form.Check
									inline
									label="Seniors"
									name="ageDivision"
									type='radio'
									id='ageDivisonSR'
									onChange={() => setAgeDivision('S')} />
								<Form.Check
									inline
									label="Masters"
									name="ageDivision"
									type='radio'
									id='ageDivisonMA'
									onChange={() => setAgeDivision('M')}
									checked />
							</Col>
							<Col className='formDivs'>
								<Form.Group className="mb-3" controlId="matchDate">
									<FloatingLabel
										controlId="matchDate"
										label="Match Date"
										id="matchDate"
										className="mb-3">
										<Form.Control
											type="date"
											name="matchDate"
											value={matchDate}
											onChange={(e) => setMatchDate(e.target.value)}
										/>
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col className='formDivs'>
								<Form.Group  className="mb-3 px-0" controlId="round">
									<FloatingLabel
										controlId="roundName"
										label="Round Name"
										className="mb-3">
										<Form.Control type="text" value={round} onChange={(e) => setRound(e.target.value)} />
									</FloatingLabel>
								</Form.Group>
							</Col>
							<Col className='px-0 formDivs'>
								<Form.Group  className="mb-3 px-0" controlId="url">
									<FloatingLabel
										controlId="videoURL"
										label="Video URL"
										className="mb-3">
										<Form.Control type="text" value={url} onChange={(e) => setURL(e.target.value)} />
									</FloatingLabel>
								</Form.Group>
							</Col>
						</Row>
						<Button variant="success" onClick={submitData}>Submit</Button>
					</>
				)}
			</Form>
		</Container>
	);
}
