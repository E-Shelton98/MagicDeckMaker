//import dependencies
import React, { useState, useEffect } from 'react';
import SearchCardList from './SearchCardList';
//import reactstrap navbar
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';

const Home = () => {
	const [card, setCard] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [searchCard, setSearchCard] = useState('knight');

	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		const url = `https://api.scryfall.com/cards/search?q=${searchCard}`;
		const scryFetch = async (url) => {
			const response = await fetch(url);
			const data = await response.json();
			setCard(data);
			console.log(data);
		};

		scryFetch(url);
	}, [searchCard]);

	return (
		<div>
			<Navbar color='dark' dark expand='md'>
				<NavbarBrand href='/'>mtg-deck-maker</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<NavItem>
							<NavLink href='/'>item1</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/'>Item2</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
					<NavbarText>Simple Text</NavbarText>
				</Collapse>
			</Navbar>
			{/*<SearchCardList card={card} />*/}
		</div>
	);
};

export default Home;
