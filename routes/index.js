const express = require('express');
const router = new express.Router();
const colorsObj = require('../colors.json');

/* GET home page. */
router.get('/route1', (req, res, next) => {
  res.render('route1', { title: 'Express' });
});

router.get('/route2', (req, res, next) => {
  return res.json(colorsObj);
});

router.get('/route2/:color', (req, res, next) => {
  let jsonMatch;
  const singleColor = req.params.color.toLowerCase();

  colorsObj.colors.forEach((color) => {
    if (color.color === singleColor) {
      jsonMatch = color;
    }
  });

  if (jsonMatch) {
    return res.json(jsonMatch);
  }
  next();
});

module.exports = router;
