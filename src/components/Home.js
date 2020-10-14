//import dependencies
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import CardSearch from './CardSearch';
import CardSearchList from './CardSearchList';
import DisplaySearchCard from './DisplaySearchCard';

const Home = (props) => {
	//State to pass to render cards
	const [cards, setCards] = useState([]);
	//State to pass for API call to search cards
	const [searchCard, setSearchCard] = useState('');
	const [clickedCard, setClickedCard] = useState();
	//const [deck, setDeck] = useState([])
	const handleSubmit = (input) => {
		setSearchCard(input);
	};

	const handleClick = (card) => {
		setClickedCard(card);
	};

	useEffect(() => {
		const url = `https://api.scryfall.com/cards/search?q=${searchCard}`;
		const scryFetch = async (url) => {
			const response = await fetch(url);
			const data = await response.json();
			setCards(data.data);
		};
		scryFetch(url);
	}, [searchCard]);

	return (
		<>
			<NavBar />

			<CardSearch onSubmitFromHome={handleSubmit} />
			<main className='home-main'>
				<CardSearchList cards={cards} onClickFromHome={handleClick} />
				{clickedCard ? (
					<DisplaySearchCard card={clickedCard} addToDeck={props.addToDeck} />
				) : (
					<span>Choose a card in the list to view more info</span>
				)}
			</main>
		</>
	);
};

export default Home;
