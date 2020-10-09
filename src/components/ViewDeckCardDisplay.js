import React from 'react'

const ViewDeckCardDisplay = (props) => {
    
    
    return (<img className="vd-card-display" src={props.card.image_uris.normal} alt={props.card.name} />)
}

export default ViewDeckCardDisplay