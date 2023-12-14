const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

// return matching gifs based on search query

const API_KEY = 'wpJF92HnfE6Gz3FjtjYc3yKda5tHyuXn';


router.get('/:q', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${req.params.q}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then((response) => {
            res.send(response.data);
        }).catch((error) => {
            console.log('Error in search', error);
            res.sendStatus(500);
        })
})

module.exports = router;
