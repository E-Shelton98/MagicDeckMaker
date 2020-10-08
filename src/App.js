import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import ViewDeck from "./components/ViewDeck"
import {Switch, Route} from 'react-router-dom'

function App() {
  const [deck, setDeck] = useState([])
  
  
	const addToDeck = (cardToDeck, amountCards) => {
    let numCards = amountCards
    let integer = parseInt(numCards, 10);
    const addedCards = []
    for (let counter = 1; counter <= integer; counter++) {
      addedCards.push(cardToDeck);
		}
		if (addedCards[0]) {
      const newDeck = deck;
      for (const item of addedCards){
        newDeck.push(item)
      }
      setDeck(newDeck);
      console.log('this is deck in App: ', deck);
		}
	};

	/*if (deck === false) {
		addToDeck();
	} else {
		addToDeck();
	}*/
  
  
  
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Home addToDeck={addToDeck}/></Route>
        <Route path="/ViewDeck"><ViewDeck deck={deck}/></Route>
      </Switch>
    </div>
  );
}

export default App;
