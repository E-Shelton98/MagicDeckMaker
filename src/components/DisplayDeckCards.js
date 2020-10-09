import React from 'react'

const DisplayDeckCards = (props) => {

    let cardDivs = "Loading..."

    const handleClick = (card) => {
        props.onClickFromViewDeck(card)
    }

    function displayCards(c, index) {
        let cardSpan = ""
        if (c.name) {
            cardSpan = (
                <span onClick ={() => handleClick(c)}>
                    {c.name}
                </span>
            )
        }
        return <div key={index}>{cardSpan}</div>
    }

    cardDivs = props.deck.map(displayCards)

    return (
        <div className='deck-cards'>
            {cardDivs}
        </div>
    )
}

export default DisplayDeckCards