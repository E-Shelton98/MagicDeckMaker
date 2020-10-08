import React from 'react'

const DisplayDeckCards = (props) => {

    let cardDivs = "Loading..."

    /*const handleClick = (card) => {
        props.onClickFromDisplayDeck(card)
    }*/

    function displayCards(c, index) {
        let cardSpan = ""
        if (c.name) {
            cardSpan = (
                <span>
                    {c.name}
                </span>
            )
        }
        return <div key={index}>{cardSpan}</div>
    }

    cardDivs = props.deck.map(displayCards)

    return (
        <div className='deckCards'>
            {cardDivs}
        </div>
    )
}

export default DisplayDeckCards