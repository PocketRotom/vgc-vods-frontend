import React, {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';
import Footer from './Footer';
import Loader from './Loader';
import MyNavBar from './MyNavBar';

export default function Layout() {
	return (
		<>
			<MyNavBar />
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	);
}
