const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', (req, res, next) => {
  const products = new ProductModel().getAll();

  res.status(200).json(products);
});

router.get('/:id', (req, res, next) => {
  const product = new ProductModel().getById(req.params.id);

  res.status(200).json(product);
});

router.post('/new', (req, res) => {
  const { name, brand } = req.body;

  const newProduct = new ProductModel(name, brand);
  newProduct.add();

  res.status(201).json(newProduct);
});

router.delete('/:id', (req, res) => {
  const products = new ProductModel().delete(req.params.id);
  res.status(202);
  // res.send(products);
});

router.post('/update-user/:id', (req, res) => {
  const { name, brand } = req.body;

  const products = new ProductModel(name, brand).addOrUpdate(req.params.id);

  res.send(products);
});

module.exports = router;
