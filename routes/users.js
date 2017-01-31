var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/admin/', function(req, res, next) {
  res.render('admin', { title: 'Administration' });
});

router.get('/admin/:id/', function(req, res) {
    var id = req.params.id;
    switch (id) {
        case "1":
            res.send("richiesto 1");
            break;
            
        default:
            
            break;
    }
});
module.exports = router;
