import React from 'react';

const SearchCardList = (props) => {
	console.log(props);

	function displayCards(c, index) {
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

	props.card.forEach(displayCards);
};

export default SearchCardList;
