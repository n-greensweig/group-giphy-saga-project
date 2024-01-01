const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "favorite";';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
      res.sendStatus(500);
    })
});


// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(201);
});

// update a favorite's associated category
router.put('/:id', (req, res) => {

  let queryText = `
  UPDATE "favorite" SET "category_id" = $1 WHERE "id" = $2;
  `;

  console.log('hi', req.body.category_id);
  console.log('hello', req.params.id);

  pool.query(queryText, [req.body.category_id, req.params.id])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.error('Error updating category', error);
      res.sendStatus(500);
    });

});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
