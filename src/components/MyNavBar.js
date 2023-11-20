import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import logo from '../logo.svg';
import MenuItems from './MenuItems';
import PathConstants from '../routes/pathConstants';

export default function MyNavBar() {
	const [expanded, setExpanded] = React.useState(false);

	return (
		<Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
			<Container>
				<Navbar.Brand href="#home">
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
				<Navbar.Collapse id="navbarScroll" className="justify-content-evenly">
					<MenuItems
						name="Home"
						path={PathConstants.HOME}
						onClose={setExpanded}
					/>
					<MenuItems
						name="About"
						path={PathConstants.ABOUT}
						onClose={setExpanded}
					/>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
