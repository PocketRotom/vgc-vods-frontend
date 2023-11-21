import React, {useEffect, useState}  from 'react';
import { useParams } from 'react-router-dom';
import { getMatchByID } from '../services/matches';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Table from 'react-bootstrap/Table';
import Flag from 'react-flagpack';
import { useApp } from '../contexts/app';



export default function Match() {
	let params = useParams();
	let {spoilers} = useApp();
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
					<h2>{match.event_location}, {match.country_name}, {new Date (match.date).getFullYear()}/{new Date(match.date).getMonth()}/{new Date(match.date).getDate()}</h2>
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
							<th>Player 1</th>
							<td colSpan={4}>{match.player1_name}</td>
							<td><Flag hasBorder={false} size="M" code={match.p1_country_code}/></td>
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
							<th>Player 2</th>
							<td colSpan={4}>{match.player2_name}</td>
							<td><Flag hasBorder={false} size="M" code={match.p2_country_code}/></td>
						</tr>
						<tr>
							<td>{match.pokemon1_p2_name}</td>
							<td>{match.pokemon2_p2_name}</td>
							<td>{match.pokemon3_p2_name}</td>
							<td>{match.pokemon4_p2_name}</td>
							<td>{match.pokemon5_p2_name}</td>
							<td>{match.pokemon6_p2_name}</td>
						</tr>
						<tr>
							<th colSpan={6}>Casters</th>
						</tr>
						<tr>
							<td colSpan={2}>{match.caster1_name}</td>
							<td colSpan={1}><Flag hasBorder={false} size="M" code={match.c1_country_code} /></td>
							<td colSpan={2}>{match.caster2_name}</td>
							<td colSpan={1}><Flag hasBorder={false} size="M" code={match.c2_country_code} /></td>
						</tr>
						{spoilers && <>
							<tr>
								<th rowSpan={2}>Game 1</th>
								<td colSpan={5}>
									{match.lead1_p1_g1_name}, {match.lead2_p1_g1_name}{match.back1_p1_g1_id != 0 && `, ${match.back1_p1_g1_name}`}{match.back2_p1_g1_id != 0 && `, ${match.back2_p1_g1_name}`}
								</td>
							</tr>
							<tr>
								<td colSpan={5}>
									{match.lead1_p2_g1_name}, {match.lead2_p2_g1_name}{match.back1_p2_g1_id != 0 && `, ${match.back1_p2_g1_name}`}{match.back2_p2_g1_id != 0 && `, ${match.back2_p2_g1_name}`}
								</td>
							</tr>
							<tr>
								<th rowSpan={2}>Game 2</th>
								<td colSpan={5}>
									{match.lead1_p1_g2_name}, {match.lead2_p1_g2_name}{match.back1_p1_g2_id != 0 && `, ${match.back1_p1_g2_name}`}{match.back2_p1_g2_id != 0 && `, ${match.back2_p1_g2_name}`}
								</td>
							</tr>
							<tr>
								<td colSpan={5}>
									{match.lead1_p2_g2_name}, {match.lead2_p2_g2_name}{match.back1_p2_g2_id != 0 && `, ${match.back1_p2_g2_name}`}{match.back2_p2_g2_id != 0 && `, ${match.back2_p2_g2_name}`}
								</td>
							</tr>
							{match.lead1_p1_g3_name && <><tr>
								<th rowSpan={2}>Game 3</th>
								<td colSpan={5}>
									{match.lead1_p1_g3_name}, {match.lead2_p1_g3_name}{match.back1_p1_g3_id != 0 && `, ${match.back1_p1_g3_name}`}{match.back2_p1_g3_name != 0 && `, ${match.back2_p1_g3_name}`}
								</td>
							</tr>
							<tr>
								<td colSpan={5}>
									{match.lead1_p2_g3_name}, {match.lead2_p2_g3_name}{match.back1_p2_g3_id != 0 && `, ${match.back1_p2_g3_name}`}{match.back2_p2_g3_name != 0 && `, ${match.back2_p2_g3_name}`}
								</td>
							</tr></>}
						</>}
						
						
					</Table>
				</Col>
			</Row>
		</div>
	);
}
