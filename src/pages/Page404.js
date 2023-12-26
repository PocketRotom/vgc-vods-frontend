import '../styles/Page404.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/app';

export default function Page404() {

	const {setCurrentPage} = useApp();

	setCurrentPage('/404');

	return (
		<div className="page-404">
			<h1 className="title">404 - Page Not Found</h1>
			<p className="not-found-message">The page you are looking for does not exist</p>
			<Link to="/" className={'back-to-home'}>Back to Home</Link>
		</div>
	);
}
