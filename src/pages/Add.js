import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useApp } from '../contexts/app';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
//import Image from 'react-bootstrap/Image';

export default function AddMatch() {
	// eslint-disable-next-line no-unused-vars
	const {events, formats, countries, pokemon} = useApp();
	const [tournament, setTournament] = React.useState(-1);
	const [tournamentName, setTournamentName] = React.useState('');
	// eslint-disable-next-line no-unused-vars
	const [tournamentStartDate, setTournamentStartDate] = React.useState(new Date());
	// eslint-disable-next-line no-unused-vars
	const [tournamentEndDate, setTournamentEndDate] = React.useState(new Date());
	// eslint-disable-next-line no-unused-vars
	const [format, setFormat] = React.useState(-1);
	const [location, setLocation] = React.useState('');
	// eslint-disable-next-line no-unused-vars
	const [country, setCountry] = React.useState(-1);

	function changeTournament(e) {
		console.log(e);
		setTournament(e.target.value);
	}

	function changeTournamentName(e) {
		setTournamentName(e.target.value);
	}

	function changeTournamentStartDate(e) {
		setTournamentStartDate(e.target.value);
	}

	function changeTournamentEndDate(e) {
		setTournamentEndDate(e.target.value);
	}

	function changeFormat(e) {
		setFormat(e.target.value);
	}

	function changeLocation(e) {
		setLocation(e.target.value);
	}	

	function changeCountry(e) {
		setCountry(e.target.value);
	}

	// eslint-disable-next-line no-unreachable
	return (
		<Container>
			<h3>Where is this Tournament?</h3>
			<Row>
				<Col>
					<Form.Select aria-label="Select a Tournament" onChange={changeTournament}>
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
					<h5>New tournament Info</h5>
					<Row>
						<Col>
							<Form.Group className="mb-3" controlId="newTournamentName">
								<FloatingLabel
									controlId="floatingInput"
									label="New Tournament Name"
									className="mb-3">
									<Form.Control type="text" value={tournamentName} onChange={(e) => changeTournamentName(e.target.value)} />
								</FloatingLabel>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className="mb-3" controlId="tournamentStartDate">
								<FloatingLabel
									controlId="floatingInput"
									label="Tournament Start Date"
									id="tournamentStartDate"
									className="mb-3">
									<Form.Control
										type="date"
										name="tournamentStartDate"
										onChange={(e) => changeTournamentStartDate(e.target.value)}
									/>
								</FloatingLabel>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group className="mb-3" controlId="tournamentEndDate">
								<FloatingLabel
									controlId="floatingInput"
									label="Tournament End Date"
									id="tournamentEndDate"
									className="mb-3">
									<Form.Control
										type="date"
										name="tournamentEndDate"
										onChange={(e) => changeTournamentEndDate(e.target.value)}
									/>
								</FloatingLabel>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group className="mb-3" controlId="tournamentLocation">
								<FloatingLabel
									controlId="floatingInput"
									label="Tournament Location"
									className="mb-3">
									<Form.Control type="text" value={location} onChange={(e) => changeLocation(e.target.value)} />
								</FloatingLabel>
							</Form.Group>
						</Col>
						<Col>
							<Form.Select aria-label="Select a Format" onChange={changeFormat}>
								<option value="-1">Select a Format</option>
								{formats.map((format) => {
									return <option key={format.id} value={format.id} >{format.name}</option>;
								})}
							</Form.Select>
						</Col>
						<Col>
							<Form.Select aria-label="Select a Country" onChange={changeCountry}>
								<option value="-1">Select a Country</option>
								{countries.map((country) => {
									return <option key={country.id} value={country.id} >{country.name}</option>;
								})}
							</Form.Select>
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
}
