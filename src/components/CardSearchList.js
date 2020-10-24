//import React
import React from 'react';

//create CardSearchList component to display list of cards returned from CardSearch
const CardSearchList = (props) => {
	//if there is no search done, or search is invalid display...
	if (props.cards === undefined) {
		return <h3>Invalid Search, Possible Mispelling?</h3>;
	}
	//else display results of search
	else {
		let cardDivs = 'Loading...';

		const handleClick = (card) => {
			props.onClickFromHome(card);
		};

		function displayCards(c, index) {
			let cardSpan = '';
			if (c.name) {
				cardSpan = (
					<div onClick={() => handleClick(c)}>
						<span>{c.name}</span>
						<span>{c.cmc}</span>
					</div>
				);
			}
			return (
				<div className='cards' key={index}>
					{cardSpan}
				</div>
			);
		}

		cardDivs = props.cards.map(displayCards);

		return <div className='cards-list'>{cardDivs}</div>;
	}
};

export default CardSearchList;

//Thank you to anthonygregis for helping me get this working after a really hard bug involving mixing up data being passed!
