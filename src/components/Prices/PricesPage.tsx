// eslint-disable-next-line import/default, @typescript-eslint/no-unused-vars
import React from 'react';
import Prices from './Prices';

export default function PricesPage(): JSX.Element {
	return (
		<div>
			<h2>Price games</h2>
			<Prices title="sport game" price={50} />
			<Prices title="driving game" price={60} />
			<Prices title="shooting game" price={70} />
		</div>
	);
}
