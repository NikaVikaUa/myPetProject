// eslint-disable-next-line import/default, @typescript-eslint/no-unused-vars
import React from 'react';

interface Props {
	title: string;
	price: number;
}
export default function Flower(props: Props): JSX.Element {
	const { title, price } = props;
	return (
		<div>
			<h3>Games</h3>
			<p>
				Title: {title}
				Price: {price}
			</p>
		</div>
	);
}
