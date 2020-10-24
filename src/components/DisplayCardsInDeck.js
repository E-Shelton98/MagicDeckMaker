import React from 'react';

const DisplayCardsInDeck = (props) => {
	
	let cardDivs = 'Loading...';

	const handleClick = (card) => {
		props.onClickFromViewDeck(card);
	};

	let deck = props.deck;

	function cardFilter(card) {
		return deck.includes(card);
	}

	const cardAmountCounter = (deck) => {
		let testDeck = []
		for(let i = 0; i < deck.length; i++){
			if (testDeck.includes(deck[i]) === false){
					let cardAmountArr = deck.filter(cardFilter);
					console.log('This is cardArray: ', cardAmountArr);
					let cardAmount = cardAmountArr.length;
					console.log(cardAmount);
					testDeck.push(deck[i])
			}
		}
		
	};

	cardAmountCounter(deck);

	function displayCards(c, index) {
		let cardSpan = '';
		if (c.name) {
			cardSpan = (
				<div onClick={() => handleClick(c)}>
					<span>{c.name}</span>
					{/* <span>{counts.name}</span> */}
				</div>
			);
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

export default DisplayCardsInDeck;

//Thanks to anthonygregis for helping me with a bug in my rendering involving bad passing of props data. I had already formed the main functionality of the loops by the time he did his pull request but since its exactly the same I'll gladly give him credit for helping out.
