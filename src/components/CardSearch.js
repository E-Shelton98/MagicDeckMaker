//Import React and React.useState
import React, { useState } from 'react';
//import reactstrap components to make a form
import { Button, Form, Input, Row, Col } from 'reactstrap';

//create CardSearch component that will be our search form
const CardSearch = (props) => {
	const [input, setInput] = useState('');

	//handle change on input of text box in form
	const handleChange = (e) => {
		const userInput = e.target.value;
		setInput(userInput);
	};

	//handle submit of form
	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmitFromHome(input);
	};

	
	///WORKING ON VALIDATING TEXT INSIDE OF SEARCH BOX
	const isInValid = true
	//return reactstrap form
	return (
		<Form inline onSubmit={handleSubmit}>
			<Row form>
				<Col>
					{/* input of card name text */}
					<Input
						type='text'
						id='cardText'
						onChange={handleChange}
						value={input}
						placeholder='Search for a Card'
						invalid={isInValid}
					/>
				</Col>
				<Col>
					{/* input of card spell type filter */}
					<Input type='select' id='spellType'>
						<option>All</option>
						<option>Creature</option>
						<option>Instant</option>
						<option>Sorcery</option>
						<option>Land</option>
					</Input>
				</Col>
				<Col>
					{/* input of card legality filter */}
					<Input type='select' id='format'>
						<option>Standard</option>
						<option>Commander</option>
						<option>Modern</option>
						<option>Historic</option>
						<option>Pauper</option>
					</Input>
				</Col>
				<Col>
					{/* submit button for submitting form */}
					<Button>Submit</Button>
				</Col>
			</Row>
		</Form>
	);
};

//export CardSearch form component
export default CardSearch;
