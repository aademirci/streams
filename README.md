# Streams App

This project is still work-in-progress. 

An exercise followed from Stephen Grider's React course. It resembles a live streaming service.

ps. Install redux-form by using ```npm install redux-form --legacy-peer-deps``` command if you have Node v15+ or npm v7+ releases installed. Otherwise, the usual command ```npm install --save redux-form``` will cause a "code ERESOLVE" error that says "unable to resolve dependency tree".

## API Server Installation

This repository is only the client application. There is also a basic API to install. Follow these steps:

1. Put this repository to a /client directory.
2. Make an /api folder next to the /client directory.
3. Inside the /api folder, run the ```npm init``` command.
4. Inside the /api folder, run the ```npm install --save json-server``` command.
5. Inside the /api folder, create a db.json file and write ```{ "streams": [] }``` inside it.
6. Open the package.json file, change the "test" line completely with ```"start": "json-server -p 3001 -w db.json"```
7. Run ```npm start``` just before you start the client application.

## RTMP Server Installation

One final thing to install alongside the client app is the RTMP server. Follow these steps:

1. Make an /rtmp folder next to the /client directory.
2. Inside the /rtmp folder, run the ```npm init``` command.
3. Inside the /rtmp folder, run the ```npm install --save node-media-server``` command.
4. Inside the /rtmp folder, create a index.js file and paste the following:


```javascript
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
```

5. Open the package.json file, change the "test" line completely with ```"start": "node index.js"```
6. Run ```npm start``` just before you start the client application.

## OBS Settings

In the OBS (Open Broadcaster Software) (https://obsproject.com) Settings>Stream, select Custom for the Service. Write *rtmp://localhost/live* for Server and the stream ID for the Stream Key. Press Start Streaming. Visit the stream with the given ID on the client app. The stream will show on the video player.