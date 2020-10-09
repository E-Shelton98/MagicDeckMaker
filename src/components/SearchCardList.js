import React from 'react';

const SearchCardList = (props) => {
	if (props.cards === undefined){
		return(<h3>Invalid Search, Possible Mispelling?</h3>)
	}
	else {
	
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
		return <div className="cards" key={index}>{cardSpan}</div>;
	}
	
	
	cardDivs = props.cards.map(displayCards);
	
	return (
		<div className='cards-list'>
			{cardDivs}
		</div>
	);
	}
};

export default SearchCardList



//Thank you to anthonygregis for helping me get this working after a really hard bug involving mixing up data being passed!
