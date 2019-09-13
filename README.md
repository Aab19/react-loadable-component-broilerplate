[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# React Redux Isomorphic Boilerplate
Isomorphic apps, built using Express, ReactJS and Redux. This allows to server side rendering and server requests.

<div style="text-align:center">
<img src="https://pbs.twimg.com/media/DL56FSWVoAA-BUA.jpg:large" />
</div>

## About Isomorphic Javascript
Isomporphic applications can run both on clients such as web browsers and on servers. Written on top of Node.js, that focuses on real-time web applications. More https://www.sitepoint.com/isomorphic-javascript-applications/

## Life Cycle

### First load (server rendering and request data)
    When the user opens a web page, [ReactRouter](https://github.com/ReactTraining/react-router) starts to match `req.url` to available routes. [ReactJS](reactjs.org) will render and request data on server along with rendering of [ExpressJS](reactjs.org).
### Page transition (transition and ajax)
    After first load, user most likely will move to other page with link that exist. In this event [ReactRouter](https://github.com/ReactTraining/react-router) will handle it, and [ReactJS](reactjs.org) will request data via ajax using [Superagent](https://visionmedia.github.io/superagent/)

## Getting Started

### Prerequisites
* [NodeJS](https://nodejs.org/en/download/) 
* NPM (should be bundled with NodeJS)
* [Yarn (recommended to replace NPM,optional)](https://yarnpkg.com), all yarn commands below can be changed using npm

### Code of conduct 
* Code gear : http://internalgit.ojodowo.com/sebangsaweb/web-boilerplate/blob/master/docs/code%20gear.md 
* Things to learn : http://internalgit.ojodowo.com/sebangsaweb/web-boilerplate/blob/master/docs/things%20to%20learn.md

### Clone 

Clone this repository to your local machine.
```
git clone ssh://git@internalgit.ojodowo.com:19090/sebangsaweb/web-boilerplate.git
```

### Installation

Install dependencies using yarn
```
yarn install
```

### Development Scripts 

Run the server
```
yarn start
```

Run client build 
```
yarn webpack
```

### Documentations 
- JsDocs : https://devdocs.io/jsdoc-tags/
- Api : http://internalgit.ojodowo.com/API0/cermin-api/wikis/home

### Open in browser
Visit [http://localhost:3001](http://localhost:3001), or whichever port specified in your configuration file (`.env`).