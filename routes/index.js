var express = require('express');
var router = express.Router();
var user= require("../Controller/userController");


/* GET home page. */
router.get('/',user.index);
router.get('/get/:id',user.get_data);
router.get('/page',user.get_data_api);
router.post('/Add',user.Add);

module.exports = router;
