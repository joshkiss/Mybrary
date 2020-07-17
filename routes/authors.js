const express = require('express');
const router = express.Router();
const Author = require('../models/author')

// Al Authors
router.get('/', (req, res) => {
    res.render('authors/index');
});

// Create New Author
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
})

// Create Author Route
router.post('/', (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    res.send(req.body.name)
})

module.exports = router;