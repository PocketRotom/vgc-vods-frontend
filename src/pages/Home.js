import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getAllMatches } from '../services/matches';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import groupToArray from '../utils/groupToArray';
export default function Home() {

	const [allFormats, setAllFormats] = useState([]);

	async function getMatches() {
		return await getAllMatches();
	}

	useEffect(() => {
		(async () => {
			const matches = await getMatches();
			const final = groupToArray(matches.data, 'format_id');
			setAllFormats(final);
		})();
	}, []);

	return (
		<div>
			<Row>
				{allFormats.map((match) => (
					<Col xs={12} md={6} key={match[1][0].format_id}>
						<h1>{match[1][0].format_name}</h1>
						<Table striped bordered>
							<thead>
								<tr>
									<th>Tournament</th>
									<th>Player 1</th>
									<th>Player 2</th>
									<th>Round</th>
								</tr>
								{match[1].map((match) => (
									<tr key={match.match_id}>
										<td>{match.event_name}</td>
										<td>{match.player1_name}</td>
										<td>{match.player2_name}</td>
										<td><Link to={`match/${match.match_id}`}>{match.round}</Link></td>
									</tr>
								))}
							</thead>
						</Table>
					</Col>
				))}
			</Row>
		</div>
	);
}
