// eslint-disable-next-line import/default, @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';

export default function Activity(): JSX.Element {
	const [name, setName] = useState<string>('');
	const [numberOfParticipants, setNumberOfParticipants] = useState<number>(0);
	const [activityType, setActivityType] = useState<string>('');

	async function fetchActivity(): Promise<void> {
		const res = await fetch('https://www.boredapi.com/api/activity');
		const obj = await res.json();
		// console.log(obj);
		const { activity, type, participants } = obj;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setName(activity);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setNumberOfParticipants(participants);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		setActivityType(type);
	}

	useEffect(() => {
		fetchActivity();
	}, []);

	const handleReload = (): void => {
		fetchActivity();
	};
	return (
		<>
			<h1>Random Activity</h1>
			<p>Название мероприятия: {name}</p>
			<p>Число участников: {numberOfParticipants}</p>
			<p>Тип мероприятия: {activityType}</p>
			<button type="button" onClick={handleReload}>
				Следущее
			</button>
		</>
	);
}
