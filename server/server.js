const express = require('express'); // import express library
const request = require('request'); // import request library
const helmet = require('helmet'); // import helmet library

const app = express(); // create an express app

app.use(helmet()); // enable helmet middleware to add security headers

const ITUNES_API_BASE_URL = 'https://itunes.apple.com/search'; // base url for iTunes API

app.get('/search', (req, res) => { // define a GET route handler for '/search' path
  const { term, media } = req.query;
  if (!term) { 
    return res.status(400).send({ error: 'Missing required parameter: term' }); 
  }
  const options = { // define options for the request
    url: ITUNES_API_BASE_URL, // set the url to the iTunes API base url
    qs: { // set the query string parameters
      term, // set the 'term' parameter to the value of 'term'
      media: media || 'all', // set the 'media' parameter to the value of 'media' or 'all' if 'media' is not provided
    },
  };

  request(options, (error, response, body) => { // make a request to the iTunes API with the specified options
    if (error) { // if there is an error
      return res.status(500).send({ error: error.message });
    }

    try {
      const data = JSON.parse(body); // try to parse the response body as JSON
      res.send(data); // send the parsed data as the response
    } catch (err) { // if there is an error while parsing the response body
      res.status(500).send({ error: err.message });
    }
  });
});

const PORT = process.env.PORT || 3001; // set the port to the value of the 'PORT' environment variable or 3001 if it is not set
app.listen(PORT, () => { // start the server and listen on the specified port
  console.log(`Server listening on PORT ${PORT}`); // log a message to the console
});

module.exports = app;