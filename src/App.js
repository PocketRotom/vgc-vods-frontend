import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';
import Page404 from './pages/Page404';
import { AppProvider } from './contexts/app';

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			errorElement: <Page404 />,
			children: routes
		}
	]);

	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	);
}

export default App;
