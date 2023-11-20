import React, {useEffect, useState}  from 'react';
import { useParams } from 'react-router-dom';
import { getMatchByID } from '../services/matches';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Table from 'react-bootstrap/Table';



export default function Match() {
	let params = useParams();
	const [match, setMatch] = useState();
	const [loading, setLoading] = useState(true);

	async function getMatch() {
		return await getMatchByID(params.matchID);
	}

	useEffect(() => {
		(async () => {
			let res = await getMatch();
			console.log(res.data);
			setMatch(res.data[0]);
			setLoading(false);
		})();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Row>
				<Col>
					<h1>
						{match.event_name} - {match.round} - {match.age_division == 'M' ? 'Masters' : match.age_division == 'S' ? 'Senior' : 'Junior'}
					</h1>
				</Col>
			</Row>
			<Row>
				<Col xs={8}>
					<Ratio aspectRatio="16x9">
						<iframe
							src={match.url.replace('watch?v=', 'embed/')}
							title="YouTube video"
							allowfullscreen
							className='embed-responsive'
						></iframe>
					</Ratio>
				</Col>
				<Col xs={4}>
					<Table striped bordered>
						<tr>
							<td colSpan={5}>{match.player1_name}</td>
							<td>{match.p1_country_name}</td>
						</tr>
						<tr>
							<td>{match.pokemon1_p1_name}</td>
							<td>{match.pokemon2_p1_name}</td>
							<td>{match.pokemon3_p1_name}</td>
							<td>{match.pokemon4_p1_name}</td>
							<td>{match.pokemon5_p1_name}</td>
							<td>{match.pokemon6_p1_name}</td>
						</tr>
						<tr>
							<td colSpan={5}>{match.player2_name}</td>
							<td>{match.p2_country_name}</td>
						</tr>
						<tr>
							<td>{match.pokemon1_p2_name}</td>
							<td>{match.pokemon2_p2_name}</td>
							<td>{match.pokemon3_p2_name}</td>
							<td>{match.pokemon4_p2_name}</td>
							<td>{match.pokemon5_p2_name}</td>
							<td>{match.pokemon6_p2_name}</td>
						</tr>
					</Table>
				</Col>
			</Row>
		</div>
	);
}
