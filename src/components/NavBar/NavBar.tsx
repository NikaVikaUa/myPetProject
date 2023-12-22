// eslint-disable-next-line import/default, @typescript-eslint/no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './NavBar.module.css';

function Navbar(): JSX.Element {
	const navigate = useNavigate();
	const btnNavHome = (): void => navigate('/');
	const btnNavAdventures = (): void => navigate('/adventures');
	const btnNavAboutUs = (): void => navigate('/aboutus');
	const btnNavBookAnExperiance = (): void => navigate('/bookanexperiance');
	const btnNavPrices = (): void => navigate('/prices');
	const btnNavContacts = (): void => navigate('/contacts');
	const btnNavCity = (): void => navigate('/city');
	const btnNavPhoneNumber = (): void => navigate('/number');
	return (
		<div className={style.wrapper}>
			<button type="button" onClick={btnNavCity}>
				City
			</button>
			<button type="button" onClick={btnNavAdventures}>
				ADVENTURES
			</button>
			<button type="button" onClick={btnNavBookAnExperiance}>
				BOOK AN EXPERIANCE
			</button>
			<button type="button" onClick={btnNavHome}>
				BR29
			</button>
			<button type="button" onClick={btnNavPrices}>
				PRICES
			</button>
			<button type="button" onClick={btnNavAboutUs}>
				ABOUT US
			</button>
			<button type="button" onClick={btnNavContacts}>
				CONTACTS
			</button>
			<button type="button" onClick={btnNavPhoneNumber}>
				+49 69 12345678
			</button>
		</div>
	);
}

export default Navbar;
