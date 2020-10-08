import React from 'react';
import { Bar } from 'react-chartjs-2';

const CMCVariety = (props) => {
	console.log('CMCVariety Deck: ', props.deck);

	let cmc0or1 = 0,
		cmc2 = 0,
		cmc3 = 0,
		cmc4 = 0,
		cmc5 = 0,
		cmc6orhigher = 0,
		land = 0;

	for (const card of props.deck) {
		console.log(card.type_line);
		if (card.cmc === 0 || card.cmc === 1) {
			if (card.type_line === 'Land') {
				land += 1;
			} else if (card.type_line === 'Basic Land — Plains') {
				land += 1;
			} else if (card.type_line === 'Basic Land — Island') {
				land += 1;
			} else if (card.type_line === 'Basic Land — Swamp') {
				land += 1;
			} else if (card.type_line === 'Basic Land — Mountain') {
				land += 1;
			} else if (card.type_line === 'Basic Land — Forest') {
				land += 1;
			} else {
				cmc0or1 += 1;
			}
		} else if (card.cmc === 2) {
			cmc2 += 1;
		} else if (card.cmc === 3) {
			cmc3 += 1;
		} else if (card.cmc === 4) {
			cmc4 += 1;
		} else if (card.cmc === 5) {
			cmc5 += 1;
		} else if (card.cmc === 6) {
			cmc6orhigher += 1;
		}
	}
	const state = {
		labels: ['0-1', '2', '3', '4', '5', '6+', 'land'],
		datasets: [
			{
				label: 'CMCVariety',
				backgroundColor: 'orange',
				data: [cmc0or1, cmc2, cmc3, cmc4, cmc5, cmc6orhigher, land],
			},
		],
	};

	return (
		<div className='CMCVarietyChart'>
			<Bar
				data={state}
				options={{
					title: {
						display: true,
						text: 'CMC Variety',
						fontSize: 20,
					},
					legend: {
						display: false,
					},
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
};

export default CMCVariety;
