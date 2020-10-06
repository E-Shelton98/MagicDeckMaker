import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Form, Button, Input
} from 'reactstrap';

const Example = (props) => {
  console.log("This is DisplaySearchCard Props: ", props)
  console.log("This is art_crop: ",props.card.image_uris.art_crop)
  

  return (
		<div>
			<Card>
				<CardImg
					top
					width='100%'
					src={props.card.image_uris.art_crop}
					alt='Card image cap'
				/>
				<CardBody>
					<CardTitle>{props.card.artist}</CardTitle>
					<div className='cardInfo'>
						<CardSubtitle>{props.card.set_name}</CardSubtitle>
						<CardSubtitle>{props.card.type_line}</CardSubtitle>
					</div>
					<CardText>{props.card.oracle_text}</CardText>
					<Form className="card-form">
						<Button className="add-to-deck">Add to Deck</Button>
						<Input type='select' id="card-amount">
							<option>1</option>
							<option>2</option>
              <option>3</option>
              <option>4</option>
            </Input>
					</Form>
				</CardBody>
			</Card>
		</div>
	);

};

export default Example;