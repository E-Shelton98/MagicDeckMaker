import React from 'react'
import {Bar} from 'react-chartjs-2'

const CMCVariety = (props) => {
    console.log("CMCVariety Deck: ", props.deck)
    
    let cmc0or1 = 0, cmc2 = 0, cmc3 = 0, cmc4 = 0, cmc5 = 0, cmc6orhigher = 0
    
    for (const card of props.deck) {
        if (card.cmc === 0 || card.cmc === 1) {
					cmc0or1 += 1;
				} else if (card.cmc === 2) {
					cmc2 += 1;
				} else if (card.cmc === 3) {
					cmc3 += 1;
				} else if (card.cmc === 4) {
					cmc4 += 1;
				} else if (card.cmc === 5) {
					cmc5 += 1;
				} else {
					cmc6orhigher += 1;
				}
    }
    const state = {
        labels: ['0-1', '2', '3', '4', '5', '6+'],
        datasets: [
            {
                label: 'CMCVariety',
                backgroundColor: 'black',
                data: [cmc0or1, cmc2, cmc3, cmc4, cmc5, cmc6orhigher]
            }
        ]

    }
    
    
    return(
        <div className="CMCVarietyChart">
            <Bar
                data={state}
                options={{
                    title:{
                        display: true,
                        text: 'CMC Variety',
                        fontSize: 20
                    },
                    legend:{
                        display: false,
                    }
                }}
            />
        </div>
        )
}

export default CMCVariety