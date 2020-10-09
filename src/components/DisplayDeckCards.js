import React from 'react';

const DisplayDeckCards = (props) => {
	let cardDivs = 'Loading...';

	const handleClick = (card) => {
		props.onClickFromViewDeck(card);
	};

	function displayCards(c, index) {
		let cardSpan = '';
		if (c.name) {
			cardSpan = <span onClick={() => handleClick(c)}>{c.name}</span>;
		}
		return (
			<div className='deck-card-divs' key={index}>
				{cardSpan}
			</div>
		);
	}

	cardDivs = props.deck.map(displayCards);

	return <div className='deck-cards'>{cardDivs}</div>;
};

export default DisplayDeckCards;

//Thanks to anthonygregis for helping me with a bug in my rendering involving bad passing of props data. I had already formed the main functionality of the loops by the time he did his pull request but since its exactly the same I'll gladly give him credit for helping out.
