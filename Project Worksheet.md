# Project Overview

## Project Links

- [https://github.com/E-Shelton98/mtg-deck-maker]()
- [add your deployment link]()

## Project Description

This is a react app for building magic the gathering card decks, as well as viewing data such as card type, cmc values, and other statistics.

## API

Scryfall API is a heavily used API for pulling Magic the Gathering data, such as card name, cmc, artist, a picture of the card, setid, and various other attributes.

```
{data: {'https://api.scryfall.com/cards/named?exact=inspiringveteran'}}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Home-Mobile](https://res.cloudinary.com/dm5cjaisp/image/upload/v1601658160/mtg-deck-maker:Home-Mobile.png)
- [Home-Desktop](https://res.cloudinary.com/dm5cjaisp/image/upload/v1601658147/mtg-deck-maker:Home-Desktop.png)
- [ViewDeck-Mobile](https://res.cloudinary.com/dm5cjaisp/image/upload/v1601658140/mtg-deck-maker:ViewDeck-Mobile.png)
- [ViewDeck-Desktop](https://res.cloudinary.com/dm5cjaisp/image/upload/v1601658132/mtg-deck-maker:ViewDeck-Desktop.png)
- [React Architecture](https://lucid.app/invitations/accept/0d4081c5-f3b9-4680-94be-dfcc72aaf43b)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Pull searched card data from Scryfall
- Render list of searched cards on screen
- Add chosen card to deck
- Display Deck list
- Display deck list data in various charts

#### PostMVP EXAMPLE

- Add saving of Deck to a file
- Allow loading and creation of multiple decks
- Create toggle for mobile displays to see deck data on ViewDeck page
- Create logo
- Create system for heavier filtering of searched cards: by set, type, color and so on... instead of just name.

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| MVP                      | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------------------ | :------: | :------------: | :------------: | :---------: |
| Pulling API Data         |    H     |      2hrs      |      2hrs      |    2hrs     |
| Displaying Search Result |    H     |      2hrs      |      hrs       |     hrs     |
| Adding Card to Deck      |    H     |      2hrs      |      hrs       |     hrs     |
| Displaying Data on Home  |    M     |      3hrs      |      hrs       |     hrs     |
| Display Deck on ViewDeck |    M     |      2hrs      |      hrs       |     hrs     |
| Display Data on ViewDeck |    H     |      2hrs      |      hrs       |     hrs     |
| Total                    |    H     |     13hrs      |      5hrs      |     hrs     |

| MVP+                           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Save Deck to File              |    M     |      2hrs      |      hrs      |     hrs     |
| Load and Create Multiple Decks |    L     |      3hrs      |      hrs      |     hrs     |
| Toggle for Mobile Data View    |    H     |      3hrs      |      hrs      |     hrs     |
| Create Logo                    |    H     |      2hrs      |      hrs      |     hrs     |
| Heavier Filtering System       |    H     |      3hrs      |      hrs      |     hrs     |
| Total                          |    H     |     13hrs      |      hrs      |     hrs     |

## Additional Libraries

-[reactstrap](https://reactstrap.github.io/)
For bootstrap react components

-[Chart.JS](https://www.chartjs.org/)
For HTML5 Charts...possibly...

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
