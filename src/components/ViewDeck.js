import React, {useState} from 'react'
import NavBar from './NavBar'
import DisplayDeckCards from './DisplayDeckCards'
import ViewDeckCardDisplay from './ViewDeckCardDisplay'

const ViewDeck = (props) => {
    
    const [clickedCard, setClickedCard] = useState()
    
    const handleClick = (card) => {
        setClickedCard(card)
    }
    
    return(
        <>
        <NavBar/>
        <DisplayDeckCards deck={props.deck} onClickFromViewDeck={handleClick}/>
        {clickedCard ? ( <ViewDeckCardDisplay card={clickedCard} />) : ( <span>Click a card</span>)}
        </>
    )
}

export default ViewDeck