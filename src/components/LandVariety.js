import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const LandVariety = (props) => {
	let multi = 0,
		white = 0,
		blue = 0,
		black = 0,
		red = 0,
		green = 0;

	for (const card of props.deck) {
		if (card.type_line === 'Basic Land — Plains') {
			white += 1;
		} else if (card.type_line === 'Basic Land — Island') {
			blue += 1;
		} else if (card.type_line === 'Basic Land — Swamp') {
			black += 1;
		} else if (card.type_line === 'Basic Land — Mountain') {
			red += 1;
		} else if (card.type_line === 'Basic Land — Forest') {
			green += 1;
		} else if (card.type_line === 'Land') {
			multi += 1;
		}
	}
	const state = {
		labels: ['white', 'blue', 'black', 'red', 'green', 'multi'],
		datasets: [
			{
				label: 'ColorVariety',
				backgroundColor: ['white', 'blue', 'black', 'red', 'green', 'orange'],
				data: [white, blue, black, red, green, multi],
			},
		],
	};

	return (
		<div className='LandVarietyChart'>
			<Doughnut
				data={state}
				options={{
					title: {
						display: true,
						text: 'Land Variety',
						fontSize: 20,
					},
					legend: {
						display: false,
					},
				}}
			/>
		</div>
	);
};

export default LandVariety;
