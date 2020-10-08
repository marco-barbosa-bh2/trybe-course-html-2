const { Router } = require('express');
const rescue = require('express-rescue');

const { Book } = require('../models');

const books = Router();

books.post('/', rescue((req, res) => {
  const { title, author, pageQuantity, createdAt } = req.body;

  Book.create({ title, author, pageQuantity, createdAt })
    .then(newBook => res.status(201).json(newBook));
}));

books.get('/', rescue((req, res) => {
  Book.findAll().then(results => res.status(200).json(results));
}));

books.get('/:id', rescue((req, res) => {
  Book.findByPk(req.params.id)
    .then(book => {
      if (!book) return res.status(404).json({ ok: false, message: 'Book not found' });

      res.status(200).json(book);
    });
}));

books.delete('/:id', rescue((req, res) => {
  Book.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).end());
}));

books.put('/:id', rescue((req, res) => {
  const { title, author, pageQuantity, createdAt } = req.body;

  Book.update({ title, author, pageQuantity, createdAt }, { where: { id: req.params.id } })
    .then(() => Book.findByPk(req.params.id))
    .then(book => res.status(200).json(book));
}));

module.exports = books;
