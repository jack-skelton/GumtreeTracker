var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://www.gumtree.com.au/s-karl/k0?fromSearchBox=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    res.send(body);
  }
});
  
  //res.render('index', { title: 'Express' });
});

module.exports = router;
