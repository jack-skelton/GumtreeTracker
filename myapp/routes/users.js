var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

module.exports = router;
 //res.send('respond with a resource');