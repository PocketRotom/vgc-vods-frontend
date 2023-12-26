import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { signup } from '../services/auth';
import { useApp } from '../contexts/app';


export default function Signup() {

	const {setCurrentPage} = useApp();

	setCurrentPage('/signup');

	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	async function doSignup() {
		if (password.length < 6) {
			alert('Insert a password with minimum 6 characters!');
			return;
		}
		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}
		try {
			let signupSuccess = await signup(username, password);
			if (!signupSuccess) {
				alert('Signup failed! Please try again!');
				return;
			}
			alert('Signed up successfully! Please login now!');
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
						<Card.Title>Signup</Card.Title>
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
								<FloatingLabel
									controlId="confirmPassword"
									label="Confirm Password"
									className="mb-3">
									<Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
								</FloatingLabel>
							</Form.Group>
						</Card.Text>
						<Button variant="primary" onClick={doSignup}>Signup</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		
	);
}
