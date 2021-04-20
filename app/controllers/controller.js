const response = require("express");
const Products = require("../../db/model/Product");

async function controller(req, res) {
  const { product } = req.query;

  let products = await Products.find();

  res.status(201).json({
    status: true,
    amount: products.length,
    data: products,
  });
}

module.exports = controller;
