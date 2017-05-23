# Minor Multi Philedelphia

This README will give you a short summary of the Philadelphia App. We start with a walkthrough into getting this project up and running. Further we will list the requirements, architecture and external libraries used.

This app will be an interactive site that will help people with Down syndrome with choosing a sport that fits them.

### Version
0.0.1

### Authors
- Bart-Jan van Ommeren
- Frank Schutte
- Albert Veldman

## Installation
```
git clone https://github.com/bartjanvanommeren/multi-minor-philadelphia.git
npm install
npm start
```
## Requirements
# MUST
- The app informs the users about sports
- The app will be made for desktop use
# SHOULD
- The user has the option to navigate back
- The app suggests sports that will fit the user
- The app shows the user where he can signup for specific sports
- The app will support tablets
 
## Mockups
The app will be an interactive questionare that hides beneath a playfull layer to captivate the user. The app will start out in a room with two to three doors the user can take, when the user clicks on one of the doors he will be taken to the next room (page) where he will be presented with two to three options again. The app will continue presenting the user different options until there is enough data to present the user which sports will best fit him, this will be an final room where the user can see several sports, when the user clicks on one of the sports he will get more information about that sport including a suggestion about where he can signup for the sport.

An example of what the apps will look like can be found [W.I.P]()

## Architecture
W.I.P

## React Components
Here you can find a list of planned components, we plan to split jsx and logical code staying true to the MVVM pattern.

Header -
A standard component present on every page

InfoPage -
A component that'll contain everything needed for the info page (we can think about things like Gmaps, Youtube and external links)

OptionsPage -
A component that'll contain everything needed for the options page

SportsPage -
A component that'll contain everything needed for the sports page

## Routes
W.I.P

``/example/test`` <br> 
Example page used as placeholder.

## External libraries
Libary name | Version
--- | ---
[NodeJS](https://nodejs.org/en/) | 6.10.0
react 
velocity
express
nodemon
