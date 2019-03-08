const express = require('express');
const router = new express.Router();
const colorsObj = require('../colors.json');

/* GET home page. */
router.get('/route1', (req, res, next) => {
  res.render('route1', { title: 'Express' });
});

// route for returning colors json object
router.get('/route2', (req, res, next) => {
  return res.json(colorsObj);
});

// route for specific color using params
router.get('/route2/:color', (req, res, next) => {
  // declare empty variable to store a matching color
  let jsonMatch;

  // gets the color param and returns in lowercase
  const singleColor = req.params.color.toLowerCase();
  
  //  loops through the array of objects to find a matching color
  colorsObj.colors.forEach((color) => {
    if (color.color === singleColor) {
      jsonMatch = color;
    }
  });
  // this is here because if we try to return res.json inside the loop,
  // it will attempt to set/write the header multiple times
  // which throws this error: Error [ERR_HTTP_HEADERS_SENT]
  // So first we find a match, store it in the jsonMatch Variable
  // if it is defined, we RETURN the res.json so it doesn't continue
  // executing other middleware or attempt to set the headers again
  if (jsonMatch) {
    return res.json(jsonMatch);
  }
  next();
});

module.exports = router;
