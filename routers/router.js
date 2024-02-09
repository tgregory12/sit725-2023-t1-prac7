let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postCricketPlayer(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllCricketPlayers(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllCricketPlayers(req,res);
});


module.exports = router;