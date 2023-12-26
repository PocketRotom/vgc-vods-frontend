import React from 'react';
import PathConstants from './pathConstants';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Match = React.lazy(() => import('../pages/Match'));
const AddMatch = React.lazy(() => import('../pages/Add'));
const Login = React.lazy(() => import('../pages/Login'));
const Signup = React.lazy(() => import('../pages/Signup'));

const routes = [
	{ path: PathConstants.HOME, element: <Home /> },
	{ path: PathConstants.ABOUT, element: <About /> },
	{ path: PathConstants.MATCH, element: <Match /> },
	{ path: PathConstants.ADD, element: <AddMatch /> },
	{ path: PathConstants.LOGIN, element: <Login /> },
	{ path: PathConstants.SIGNUP, element: <Signup /> },
];
export default routes;
