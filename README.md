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
### MUST
- The app informs the users about sports
- The app will be made for desktop use
### SHOULD
- The user has the option to navigate back
- The app suggests sports that will fit the user
- The app shows the user where he can signup for specific sports
- The app will support tablets
 
## Mockups
The app will be an interactive questionare that hides beneath a playfull layer to captivate the user. The app will start out in a room with two to three doors the user can take, when the user clicks on one of the doors he will be taken to the next room (page) where he will be presented with two to three options again. The app will continue presenting the user different options until there is enough data to present the user which sports will best fit him, this will be an final room where the user can see several sports, when the user clicks on one of the sports he will get more information about that sport including a suggestion about where he can signup for the sport.

An example of what the apps will look like can be found [W.I.P]()

## Architecture
```
root
│   README.md
│   package.json   
|
└───node_modules
│
└───public
│    │   index.html
│    │   manifest.json
│   
└───server
|    │   index.js
|
└───src
|    |   index.js
|    |   index.css
|    |
|    └───components
|    |    └───component1
|    |    |    |   component1.js
|    |    |    |   component1.scss
|    |    |
|    |    └───component2
|    |    |    |   component2.js
|    |    |    |   component2.scss
|    |    |
```

## React Components
Here you can find a list of planned components, we plan to split jsx and logical code staying true to the MVVM pattern.

Door -
Reusable component, can contain, can be animated navigates to new page when clicked, can play audio, is dynamic in content.

BackButton -
Handles back navigation

VideoPlayer -
Can play a video most likely embedded YT

Room -
Container component can either contain door type content or choice type content

## Routes
W.I.P

``/example/test`` <br> 
Example page used as placeholder.

## External libraries
Libary name | Version
--- | ---
[NodeJS](https://nodejs.org/en/) | 6.10.0
[React](https://facebook.github.io/react/) | 15.5.4
[Velocity React](https://github.com/twitter-fabric/velocity-react) | 1.3.3
[Express](https://expressjs.com/) | 4.15.3
