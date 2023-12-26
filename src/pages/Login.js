import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { login } from '../services/auth';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/app';


export default function Login() {

	const {setCurrentPage} = useApp();

	setCurrentPage('/login');

	const navigate = useNavigate();
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	async function doLogin() {
		try {
			let token = await login(username, password);
			if (!token) {
				alert('Login failed! Please try again!');
				return;
			}
			Cookies.set('token', token.data, { expires: 1, secure: true });
			alert('Logged in Successfully. Redirecting');
			navigate('/add');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Row>
			<Col style={{display: 'flex'}} className="justify-content-md-center">
				<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src="logo192.png" />
					<Card.Body>
						<Card.Title>Login</Card.Title>
						<Card.Text>
							<Form.Group  className="mb-3 px-0" controlId="newTournamentName">
								<FloatingLabel
									controlId="username"
									label="Username"
									className="mb-3">
									<Form.Control type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
								</FloatingLabel>
								<FloatingLabel
									controlId="password"
									label="Password"
									className="mb-3">
									<Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
								</FloatingLabel>
							</Form.Group>
						</Card.Text>
						<Button variant="primary" onClick={doLogin}>Login</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
}
