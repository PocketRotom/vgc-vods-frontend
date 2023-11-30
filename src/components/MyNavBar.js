import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import logo from '../logo.svg';
import MenuItems from './MenuItems';
import PathConstants from '../routes/pathConstants';
import MenuToggler from './MenuToggler';
import { useApp } from '../contexts/app';

export default function MyNavBar() {
	const [expanded, setExpanded] = React.useState(false);
	const { spoilers, setSpoilers } = useApp();

	return (
		<Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
			<Container>
				<Navbar.Brand href="/">
					<img
						alt=""
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
          VGC Vods
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="navbarScroll"
					onClick={() => setExpanded(!expanded)}
				/>
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" navbarScroll>
						<MenuItems
							name="Home"
							path={PathConstants.HOME}
							onClose={setExpanded}
						/>
						<MenuItems
							name="Add Match"
							path={PathConstants.ADD}
							onClose={setExpanded}
						/>
						<MenuToggler
							name={spoilers ? 'Hide Spoilers' : 'Show Spoilers'}
							function={() => setSpoilers(!spoilers)} 
						/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
