import React, {useEffect, useState}  from 'react';
import { useParams } from 'react-router-dom';
import { getMatchByID } from '../services/matches';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import Table from 'react-bootstrap/Table';
import Flag from 'react-flagpack';
import { useApp } from '../contexts/app';
import Image from 'react-bootstrap/Image';



export default function Match() {
	let params = useParams();
	let {spoilers, setCurrentPage} = useApp();

	setCurrentPage('/match');

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
					<h2>{match.event_location}, {match.country_name}, {new Date (match.date).getFullYear()}-{new Date(match.date).getMonth()+1}-{new Date(match.date).getDate()}</h2>
				</Col>
			</Row>
			<Row>
				<Col md={8} xs={12}>
					<Ratio aspectRatio="16x9">
						<iframe
							src={match.url.replace('watch?v=', 'embed/')}
							title="YouTube video"
							allowFullScreen
							className='embed-responsive'
						></iframe>
					</Ratio>
				</Col>
				<Col md={4} xs={12}>
					<Table striped bordered>
						<tr>
							<th>Player 1</th>
							<td colSpan={4}>{match.player1_name}</td>
							<td><Flag hasBorder={false} size="M" code={match.p1_country_code}/></td>
						</tr>
						<tr>
							<td><Image alt={match.pokemon1_p1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon1_p1_id}.png`}></Image></td>
							<td><Image alt={match.pokemon2_p1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon2_p1_id}.png`}></Image></td>
							<td><Image alt={match.pokemon3_p1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon3_p1_id}.png`}></Image></td>
							<td><Image alt={match.pokemon4_p1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon4_p1_id}.png`}></Image></td>
							<td><Image alt={match.pokemon5_p1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon5_p1_id}.png`}></Image></td>
							<td><Image alt={match.pokemon6_p1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon6_p1_id}.png`}></Image></td>
						</tr>
						<tr>
							<th>Player 2</th>
							<td colSpan={4}>{match.player2_name}</td>
							<td><Flag hasBorder={false} size="M" code={match.p2_country_code}/></td>
						</tr>
						<tr>
							<td><Image alt={match.pokemon1_p2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon1_p2_id}.png`}></Image></td>
							<td><Image alt={match.pokemon2_p2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon2_p2_id}.png`}></Image></td>
							<td><Image alt={match.pokemon3_p2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon3_p2_id}.png`}></Image></td>
							<td><Image alt={match.pokemon4_p2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon4_p2_id}.png`}></Image></td>
							<td><Image alt={match.pokemon5_p2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon5_p2_id}.png`}></Image></td>
							<td><Image alt={match.pokemon6_p2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.pokemon6_p2_id}.png`}></Image></td>
						</tr>
						{match.caster1_name && <>
							<tr>
								<th colSpan={6}>Casters</th>
							</tr>
							<tr>
								<td colSpan={2}>{match.caster1_name}</td>
								<td colSpan={1}><Flag hasBorder={false} size="M" code={match.c1_country_code} /></td>
								{match.caster2_name && <>
									<td colSpan={2}>{match.caster2_name}</td>
									<td colSpan={1}><Flag hasBorder={false} size="M" code={match.c2_country_code} /></td>
								</>}
								
							</tr>
						</>}
						
						{spoilers && <>
							<tr>
								<th rowSpan={2} colSpan={2}>Game 1</th>
								<td colSpan={4}>
									<Image alt={match.lead1_p1_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead1_p1_g1_id}.png`}></Image>
									<Image alt={match.lead2_p1_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead2_p1_g1_id}.png`}></Image>
									<Image alt={match.back1_p1_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back1_p1_g1_id}.png`}></Image>
									<Image alt={match.back2_p1_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back2_p1_g1_id}.png`}></Image>
								</td>
							</tr>
							<tr>
								<td colSpan={4}>
									<Image alt={match.lead1_p2_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead1_p2_g1_id}.png`}></Image>
									<Image alt={match.lead2_p2_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead2_p2_g1_id}.png`}></Image>
									<Image alt={match.back1_p2_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back1_p2_g1_id}.png`}></Image>
									<Image alt={match.back2_p2_g1_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back2_p2_g1_id}.png`}></Image>
								</td>
							</tr>
							{match.lead1_p1_g2_name &&<>
								<tr>
									<th rowSpan={2} colSpan={2}>Game 2</th>
									<td colSpan={4}>
										<Image alt={match.lead1_p1_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead1_p1_g2_id}.png`}></Image>
										<Image alt={match.lead2_p1_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead2_p1_g2_id}.png`}></Image>
										<Image alt={match.back1_p1_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back1_p1_g2_id}.png`}></Image>
										<Image alt={match.back2_p1_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back2_p1_g2_id}.png`}></Image>
									</td>
								</tr>
								<tr>
									<td colSpan={4}>
										<Image alt={match.lead1_p2_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead1_p2_g2_id}.png`}></Image>
										<Image alt={match.lead2_p2_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead2_p2_g2_id}.png`}></Image>
										<Image alt={match.back1_p2_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back1_p2_g2_id}.png`}></Image>
										<Image alt={match.back2_p2_g2_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back2_p2_g2_id}.png`}></Image>
									</td>
								</tr></>}
							
							{match.lead1_p1_g3_name && <><tr>
								<th rowSpan={2} colSpan={2}>Game 3</th>
								<td colSpan={4}>
									<Image alt={match.lead1_p1_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead1_p1_g3_id}.png`}></Image>
									<Image alt={match.lead2_p1_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead2_p1_g3_id}.png`}></Image>
									<Image alt={match.back1_p1_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back1_p1_g3_id}.png`}></Image>
									<Image alt={match.back2_p1_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back2_p1_g3_id}.png`}></Image>
								</td>
							</tr>
							<tr>
								<td colSpan={4}>
									<Image alt={match.lead1_p2_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead1_p2_g3_id}.png`}></Image>
									<Image alt={match.lead2_p2_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.lead2_p2_g3_id}.png`}></Image>
									<Image alt={match.back1_p2_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back1_p2_g3_id}.png`}></Image>
									<Image alt={match.back2_p2_g3_name} height={'64px'} src={`https://pocketrotom.pt/vods_test/${match.back2_p2_g3_id}.png`}></Image>
								</td>
							</tr></>}
						</>}
					</Table>
				</Col>
			</Row>
		</div>
	);
}
