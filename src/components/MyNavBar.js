import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import logo from '../logo.svg';
import MenuItems from './MenuItems';
import PathConstants from '../routes/pathConstants';
import MenuToggler from './MenuToggler';
import { useApp } from '../contexts/app';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function MyNavBar() {
	const [expanded, setExpanded] = React.useState(false);
	const { spoilers, setSpoilers, user, setUser, currentPage } = useApp();
	const navigate = useNavigate();

	return (
		<Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
			<Container  style={{width: 'unset'}}>
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
						{currentPage == '/match' && <MenuToggler
							name={spoilers ? 'Hide Spoilers' : 'Show Spoilers'}
							function={() => setSpoilers(!spoilers)} 
						/>}
						
						{ user && (
							<>
								<MenuItems
									name="Add Match"
									path={PathConstants.ADD}
									onClose={setExpanded}
								/>
								<MenuToggler
									name="Logout"
									function={() => {
										setUser(null);
										navigate('/');
										Cookies.remove('token');
										alert('Logged out successfully');
									}} 
								/>
							</>
						) }
						
						

						{!user && (
							<>
								<MenuItems
									name="Login"
									path={PathConstants.LOGIN}
									onClose={setExpanded}
								/>
								<MenuItems
									name="Signup"
									path={PathConstants.SIGNUP}
									onClose={setExpanded}
								/>
							</>	
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
