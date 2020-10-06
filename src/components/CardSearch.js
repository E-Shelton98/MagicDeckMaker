import React, { useState } from 'react';
import { Button, Form, Input, Row, Col } from 'reactstrap';

const CardSearch = (props) => {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		const userInput = e.target.value;
		setInput(userInput);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmitFromHome(input);
	};

	return (
		<Form inline onSubmit={handleSubmit}>
			<Row form>
				<Col>
					<Input
						type='text'
						id='cardText'
						onChange={handleChange}
						value={input}
						placeholder='Search for a Card'
					/>
				</Col>
				<Col>
					<Input type='select' id='spellType'>
						<option>All</option>
						<option>Creature</option>
						<option>Instant</option>
						<option>Sorcery</option>
						<option>Land</option>
					</Input>
				</Col>
				<Col>
					<Input type='select' id='format'>
						<option>Standard</option>
						<option>Commander</option>
						<option>Modern</option>
						<option>Historic</option>
						<option>Pauper</option>
					</Input>
				</Col>
				<Col>
					<Button>Submit</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default CardSearch;
