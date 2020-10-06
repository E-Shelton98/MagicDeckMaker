//import dependencies
import React, { useState, useEffect, createContext } from 'react';
import NavBar from './NavBar'
import CardSearch from './CardSearch'
import SearchCardList from './SearchCardList';


const homeContext = createContext(null)
const Home = () => {
	//State to pass to render cards
	const [cards, setCards] = useState([]);
	//State to pass for API call to search cards
	const [searchCard, setSearchCard] = useState('knight');

	const handleSubmit = (input) => {
		setSearchCard(input)
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
		<homeContext.Provider value={{setSearchCard, cards}}>
			<NavBar />
			<CardSearch onSubmitFromHome={handleSubmit}/>
			<SearchCardList cards={cards}/>
		</homeContext.Provider>
	);
};

export default Home;
