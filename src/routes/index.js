import React from 'react';
import PathConstants from './pathConstants';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Match = React.lazy(() => import('../pages/Match'));

const routes = [
	{ path: PathConstants.HOME, element: <Home /> },
	{ path: PathConstants.ABOUT, element: <About /> },
	{ path: PathConstants.MATCH, element: <Match /> },
];
export default routes;
