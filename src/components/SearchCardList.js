import React from 'react';

const SearchCardList = (props) => {
	
	let cardDivs = "Loading..."
	
	const handleClick = (card) => {
		props.onClickFromHome(card)
	}

	
	
	function displayCards(c, index) {
		let cardSpan = ""
		if (c.name) {
			cardSpan = (
				<span onClick={() => handleClick(c)}>
					{c.name}
				</span>
				
			);
		}
		return <div key={index}>{cardSpan}</div>;
	}
	
	
	cardDivs = props.cards.map(displayCards);
	
	return (
		<div className='cards'>
			{cardDivs}
		</div>
	);
};

export default SearchCardList



//Thank you to anthonygregis for helping me get this working after a really hard bug involving mixing up data being passed!
