var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('https://www.gumtree.com.au/s-karl/k0?fromSearchBox=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //res.send(body);
    var $ = cheerio.load(body);
    var date = $('.ad-listing__date').text();
    console.log(date)
    res.render('users', { title: 'Users', date: date });
  }
}); 
});
 
module.exports = router;
 //res.send('respond with a resource');