import React from 'react';
import { Bar } from 'react-chartjs-2';

const SpellTypeBar = (props) => {

	let artifact = 0,
		conspiracy = 0,
		creature = 0,
		enchantment = 0,
		instant = 0,
		phenomenon = 0,
        plane = 0,
        planeswalker = 0,
        scheme = 0,
		sorcery = 0,
		tribal = 0,
		vanguard = 0;

	for (const card of props.deck) {
        const str = card.type_line
        if (str.includes('Artifact')) {
					artifact += 1;
				} else if (str.includes('Conspiracy')) {
					conspiracy += 1;
				} else if (str.includes('Creature')) {
					creature += 1;
				} else if (str.includes('Enchantment')) {
					enchantment += 1;
				} else if (str.includes('Instant')) {
					instant += 1;
				} else if (str.includes('Phenomenon')) {
					phenomenon += 1;
				} else if (str.includes('Plane')) {
					plane += 1;
				} else if (str.includes('Planeswalker')) {
					planeswalker += 1;
				} else if (str.includes('Scheme')) {
					scheme += 1;
				} else if (str.includes('Sorcery')) {
					sorcery += 1;
				} else if (str.includes('Tribal')) {
					tribal += 1;
				} else if (str.includes('Vanguard')) {
					vanguard += 1;
				}
	}
	const state = {
		labels: ['artifacts', 'conspiracies', 'creatures', 'enchantments', 'instants', 'phenomenons', 'planes', 'planeswalkers', 'schemes', 'sorceries', 'tribals', 'vanguards'],
		datasets: [
			{
				label: 'CMCVariety',
				backgroundColor: 'orange',
				data: [artifact, conspiracy, creature, enchantment, instant, phenomenon, plane, planeswalker, scheme, sorcery, tribal, vanguard],
			},
		],
	};

	return (
		<div className='spell-type-chart'>
			<Bar
				data={state}
				options={{
					title: {
						display: true,
						text: 'Spell Type Variety',
						fontSize: 20,
					},
					legend: {
						display: false,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
				}}
			/>
		</div>
	);
};

export default SpellTypeBar;
