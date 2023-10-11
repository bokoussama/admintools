const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const QUERY_API = 'http://localhost:8081/transport';
const COMMAND_API = 'http://localhost:8082/transport';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Transport api works !');
});

// id param
router.param('id', function (req, res, next, id) {
  next();
});

// Get all stations
// Get all posts
router.get('/station$', (req, res) => {
  // Get posts from the mock api
  // req.setHeader('Content-Type', 'application/json');
  console.log('calling get stations from rest api');
  axios.get(`${QUERY_API}/station`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/station/:id', function (req, res, next) {
    // Get posts from the mock api
    // req.setHeader('Content-Type', 'application/json');
    console.log('calling get stations from rest api');
    axios.get(`${QUERY_API}/station/`+ req.params.id)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
});

router.delete('/station/:id', function (req, res) {
  console.log('calling delete station from rest api');
  axios.delete(`${QUERY_API}/station/`+ req.params.id)
  .then(posts => {
    res.status(200);
  })
  .catch(error => {
    res.status(500).send(error)
  });
});

router.put('/station/:id', function (req, res) {
  console.log('calling put station from rest api');
  res.end();
});


router.post('/station', (req, res) => {
  // Get posts from the mock api
  // req.setHeader('Content-Type', 'application/json');
  console.log('calling post station from rest api');
  axios.post(`${COMMAND_API}/station`, {
    headers: {
        'Content-Type': 'application/json'
    }
  })
    .then(posts => {
      // console.log(res);
      // console.log(posts);
      res.status(res.status).json(posts.data);
    })
    .catch(error => {
      res.status(res.status).send(error)
    });
});

module.exports = router;
