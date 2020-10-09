import React from 'react'
import NavBar from './NavBar'

const About = () => {
    return (
			<>
                <NavBar />
				<h1>Welcome to my MTG deck creator app</h1>
				<p>
					This app was made using React.js, Chart.js, and a handful of other
					technologies such as react router. It's a bit of a labor of love for
					me, since I am a huge MTG fan, and decided that since I hadn't found a
					deck builder I liked yet, I would simply make my own that I can update
					with functionality that I want. There are more things planned for this
					little app that is yet to come, but please feel free to give feedback
					on the program. You can either email me at erik.shelton92@gmail.com,
					or send me a message on LinkedIn at
					https://www.linkedin.com/in/erik-shelton-07a932192/. I'm looking forward to hearing from you, and don't fret if there isn't something that you want on the program, reach out to me and I will likely add it as soon as I can.
				</p>
                <p>
                    There are a few minor bugs/future functional things that still need worked out to be aware of such as...
                    <span>
                        <ul>
                            <li>
                                Adding a new card to the deck without changing the card amount
                            </li>
                            <li>
                                Being able to save/upload a deck, as well as being able to handle multiple decks, along with other backend stuff.
                            </li>
                            <li>
                                Being able to see a rough estimate of your deck's current value. ScryFall updates every 24 hours so don't completely rely on this number when it comes, a note will be added.
                            </li>
                            <li>
                                A toggle switch to be able to easily see the deck data on mobile without having to scroll as much.
                            </li>
                            <li>
                                A full on mobile version of the act, possibly in React Native
                            </li>
                            <li>
                                The ability to track a user's full collection with its own set of data analytics such as value, set spread, amount of each type of card, so on and so on.
                            </li>
                            <li>
                                Cleaning up of the Home and ViewDeck page, especially to make the deck cards area smaller so that it displays a card and how many of it you have in a deck, instead of the same card over and over.
                            </li>
                            <li>
                                Along with the above, honestly, whatever else comes to mind or is suggested to me that fits the big picture of this app, which is a nice, easy to use deck builder that is easy to be spun up anywhere, and provides decently in depth knowledge of your deck or decks.
                            </li>
                        </ul>
                    </span> 
                    So yeah... that's the current future plans for this project and I'll make sure to update them here and there as new plans come along. So if you like the app, I encourage you to use it, or at least check in with it regularly! I'm going to somewhat routinely work on this as a fun side project along side other projects of mine in the future. 
                </p>
			</>
		);
}

export default About