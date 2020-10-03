import React from 'react';

const SearchCardList = ({cards}) => {
	
	if(cards) {
		console.log('This is cards: ', cards[0]);

	}
	/*function displayCards(c, index) {
		let cardData = '';
		if (c.data) {
			cardData = (
				<span>
					{c.name}, {index}
				</span>
			);
		}
		return <div>{cardData}</div>;
	}

	
	//props.card.forEach(displayCards);*/
	return <h1>Hello</h1>
};

export default SearchCardList;
