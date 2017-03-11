var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request('https://www.gumtree.com.au/s-karl/k0?fromSearchBox=true', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var postData = [];
      var $ = cheerio.load(body);
      
      $('li', '#srchrslt-adtable').each(function(i, post) {
        var id = post.attribs['data-add-id'];

        //check li is a post
        if (id) {
          var time = $('.ad-listing__date', post).text().trim();
          var url = $('.ad-listing__title-link', post).attr('href').trim();
          postData.push({'time': time, 'url': url, 'id': id});
        }
      });

      for (var i = 0; i < postData.length; i++) {
        request('https://www.gumtree.com.au' + postData[i].url, function (error, response, body) {
          console.log("hi");
        });
      }

       var date = $('.ad-listing__date', '#srchrslt-adtable');
      res.render('users', { title: 'Users', date: date });
    }
  }); 
});
 
module.exports = router;
 //res.send('respond with a resource');