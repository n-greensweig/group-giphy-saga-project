const express = require('express');
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const searchBarRouter = require('./routes/searchBar.router');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('build'));

app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/searchBar', searchBarRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
