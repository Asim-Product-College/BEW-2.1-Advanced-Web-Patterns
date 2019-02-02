const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  app.get('/', async (req, res) => {
    const page = req.query.page || 1

    let results = await Pet.paginate({}, {page: page})
    if (req.header('content-type') === 'application/json') {
      return res.json({ results });
    }
    res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });
  });
}

// Mongoose-paginate returns only a results variable that has these properties:

// result.docs // the array of records on the current page
// result.total // the total number of records
// result.limit // the limit
// result.page // the current page
// result.pages // the total number of pages