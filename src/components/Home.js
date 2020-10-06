//import dependencies
import React, { useState, useEffect, createContext } from 'react';
import NavBar from './NavBar'
import CardSearch from './CardSearch'
import SearchCardList from './SearchCardList';
import DisplaySearchCard from './DisplaySearchCard'


const homeContext = createContext(null)
const Home = () => {
	//State to pass to render cards
	const [cards, setCards] = useState([]);
	//State to pass for API call to search cards
	const [searchCard, setSearchCard] = useState('Knight')
	const [clickedCard, setClickedCard] = useState()

	const handleSubmit = (input) => {
		setSearchCard(input)
		console.log("Home searchCard: ", searchCard)
	}
	
	const handleClick = (card) => {
		setClickedCard(card)
		console.log("Home clickedCard: ", clickedCard)
	}
	
	
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
			<SearchCardList cards={cards} onClickFromHome={handleClick} />
			{clickedCard ? ( <DisplaySearchCard card={clickedCard} /> ) : ( <span>Click a card</span> )}
		</>
	);
};

export default Home;
