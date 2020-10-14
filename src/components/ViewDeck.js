import React, { useState } from 'react';
import NavBar from './NavBar';
import DisplayCardsInDeck from './DisplayCardsInDeck';
import DisplayDeckCard from './DisplayDeckCard';
import CMCVariety from './CMCVariety';
import ColorVariety from './ColorVariety';
import LandVariety from './LandVariety';
import SpellTypeBar from './SpellTypeBar';

const ViewDeck = (props) => {
	const [clickedCard, setClickedCard] = useState();

	const handleClick = (card) => {
		setClickedCard(card);
	};

	return (
		<>
			<NavBar />
			<main className='vd-main'>
				<DisplayCardsInDeck
					deck={props.deck}
					onClickFromViewDeck={handleClick}
				/>
				{clickedCard ? (
					<DisplayDeckCard card={clickedCard} />
				) : (
					<span>Click a card</span>
				)}
			</main>
			<div className='charts'>
				<CMCVariety deck={props.deck} />
				<div className='doughnut-charts'>
					<ColorVariety deck={props.deck} />
					<LandVariety deck={props.deck} />
				</div>
				<SpellTypeBar deck={props.deck} />
			</div>
		</>
	);
};

export default ViewDeck;
