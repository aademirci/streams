# Streams App

This project is still work-in-progress. 

An exercise followed from Stephen Grider's React course. It resembles a live streaming service like Twitch.

ps. Install redux-form by using ```npm install redux-form --legacy-peer-deps``` command if you have Node v15+ or npm v7+ releases installed. Otherwise, the usual command ```npm install --save redux-form``` will cause a "code ERESOLVE" error that says "unable to resolve dependency tree".

## API Installation

This repository is only the client application. There is also a basic API to install. Follow these steps:

1. Put this repository to a /client directory.
2. Make an /api folder next to the /client directory.
3. Inside the /api folder, run the ```npm init``` command.
4. Inside the /api folder, run the ```npm install --save json-server``` command.
5. Inside the /api folder, create a db.json file and write ```{ "streams": [] }``` inside it.
6. Open the package.json file, change the "test" line completely with ```"start": "json-server -p 3001 -w db.json"```
7. Run ```npm start``` just before you start the client application.