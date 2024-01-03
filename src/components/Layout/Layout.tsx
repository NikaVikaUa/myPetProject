// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/default
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function Layout(): JSX.Element {
	return (
		<div>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
}
