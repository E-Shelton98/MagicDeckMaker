import React, { useState } from 'react';
import './APICall.css';

const APICall = () => {
	const [card, setCard] = useState({});

	const makeAPICall = async () => {
		const response = await fetch(
			'https://api.scryfall.com/cards/named?exact=inspiringveteran'
		);
		const json = await response.json();

		console.log('this is json data: ', json);
		console.log('This is card img: ', json.image_uris.art_crop);

		setCard(json);
	};

	makeAPICall();

	let cardData = '';
	if (card) {
		cardData = (
			<div className='data'>
				<img src={card.image_uris && card.image_uris.art_crop} alt={card}></img>
			</div>
		);
	}

	return (
		<>
			<div>Card</div>
			{cardData}
		</>
	);
};

export default APICall;
