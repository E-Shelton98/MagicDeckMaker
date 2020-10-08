import React from 'react'
import NavBar from './NavBar'
import DisplayDeckCards from './DisplayDeckCards'

const ViewDeck = (props) => {
    return(
        <>
        <NavBar/>
        <DisplayDeckCards deck={props.deck}/>
        </>
    )
}

export default ViewDeck