# Minor Multi Philedelphia

This README will give you a short summary of the Philadelphia App. We start with a walkthrough into getting this project up and running. Further we will list the requirements, architecture and external libraries used.

This app will be an interactive site that will help people with Down syndrome with choosing a sport that fits them.

### Version
0.1.0

### Authors
- Bart-Jan van Ommeren
- Frank Schutte
- Albert Veldman

## Installation
```
git clone https://github.com/bartjanvanommeren/multi-minor-philadelphia.git
npm install
npm run start-local
```
## Requirements
### MUST
- The app informs the users about sports
### SHOULD
- The user has the option to navigate back
- The app suggests sports that will fit the user
- The app will support tablet
- The app will support desktop
 
## Mockups
The app will be an interactive questionare that hides beneath a playfull layer to captivate the user. The app will start out in a room with two to three doors the user can take, when the user clicks on one of the doors he will be taken to the next room (page) where he will be presented with two to three options again. The app will continue presenting the user different options until there is enough data to present the user which sports will best fit him, this will be an final room where the user can see several sports, when the user clicks on one of the sports he will get more information about that sport.

[here](https://sportestic.herokuapp.com/information/Yoga) you can find a live demo of the app to see what the app looks like.

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

App -
Wrapper component contains the app.

Audio -
Component to handle playback of audio components.

BackButton -
Handles back navigation.

CaptureImage - 
Component for taking images with device camera.

Door -
Reusable component, can contain, can be animated navigates to new page when clicked, can play audio, is dynamic in content.

Information -
Info page of the selected sport.

Room -
Container component can either contain door type content or choice type content

Login - 
Landing page of the app.

Notfound - 
404 page.

Sports - 
Component for displaying sports where needed.

## Routes
``/`` <br> 
Root used as landing page.

``/room/#`` <br> 
Rooms the user traverses during the app.

``/room/#/#`` <br> 
Final rooms where the user can choose a sport.

``/information/example`` <br> 
Info page for selected sport.

## External libraries
Libary name | Version
--- | ---
[NodeJS](https://nodejs.org/en/) | 6.10.0
[React](https://facebook.github.io/react/) | 15.5.4
[Velocity React](https://github.com/twitter-fabric/velocity-react) | 1.3.3
[Express](https://expressjs.com/) | 4.15.3
[React-Router](https://github.com/ReactTraining/react-router) | 2.8.1
[React-Youtube](https://github.com/ReactTraining/react-router) | 7.4.0
