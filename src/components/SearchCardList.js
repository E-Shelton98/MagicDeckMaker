import React, {useEffect} from 'react';

const SearchCardList = (props) => {
	let cardDivs = "Loading"

	function displayCards(c, index) {
		let cardSpan = ""
		if (c.name) {
			cardSpan = (
				<span>
					{c.name}
				</span>
			);
		}
		return <div key={index}>{cardSpan}</div>;
	}

	cardDivs = props.cards.map(displayCards);

	return (
		<>
			{cardDivs}
		</>
	)
};

export default SearchCardList;
