//create an express server 
// an endpoint for GET at /

const express = require('express')
const server = express();
const port = process.env.PORT || 4000;
const helmet = require('helmet');
const morgan = require('morgan');
const customMW = require('./custom_middleware.js')


//middleware
//built in middleware, 3rd party library, custom
server.use(
  express.json(),
  morgan('tiny'),
  helmet(),
  customMW.gatekeeper);




server.get('/entrance', (req, res) => {
  res.json({ message: "Welcome" })
});

server.listen(port, () => {
  console.log(`App is listeneing on port ${port}!`)
})