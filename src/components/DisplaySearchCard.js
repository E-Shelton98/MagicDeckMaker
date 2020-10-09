import React, { useState } from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Form,
	Button,
	Input,
} from 'reactstrap';

const Example = (props) => {
	const [amount, setAmount] = useState('');
	const [card, setCard] = useState();

	const handleSelectChange = (e) => {
		setAmount(e.currentTarget.value);
		setCard(props.card)
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		props.addToDeck(card, amount);
	};

	return (
		<div className="display-search-card">
			<Card>
				<CardImg
					top
					width='100%'
					src={props.card.image_uris.art_crop}
					alt='Card image cap'
				/>
				<CardBody>
					<CardTitle>{props.card.artist}</CardTitle>
					<div className='card-info'>
						<CardSubtitle>{props.card.set_name}</CardSubtitle>
						<CardSubtitle>{props.card.type_line}</CardSubtitle>
					</div>
					<CardText>{props.card.oracle_text}</CardText>
					<Form className='card-form' onSubmit={handleSubmit}>
						<Button className='add-to-deck'>Add to Deck</Button>
						<Input type='select' defaultValue={0} id='card-amount' onChange={handleSelectChange}>
							<option value='0'>0</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
						</Input>
					</Form>
				</CardBody>
			</Card>
		</div>
	);
};

export default Example;
