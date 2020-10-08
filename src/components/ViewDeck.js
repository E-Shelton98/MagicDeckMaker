import React, {useState} from 'react'
import NavBar from './NavBar'
import DisplayDeckCards from './DisplayDeckCards'
import ViewDeckCardDisplay from './ViewDeckCardDisplay'
import CMCVariety from './CMCVariety'
import ColorVariety from './ColorVariety'

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
        <CMCVariety deck={props.deck}/>
        <ColorVariety deck={props.deck}/>
        </>
    )
}

export default ViewDeck