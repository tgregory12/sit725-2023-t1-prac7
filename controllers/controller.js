let collection = require('../models/cricketPlayer');

const postCricketPlayer = (req,res) => {
    let cricketPlayer = req.body;
    collection.postCricketPlayer(cricketPlayer, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllCricketPlayers = (req,res) => {
    collection.getAllCricketPlayers((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteCricketPlayer = (req,res) => {
    let cricketPlayer = req.body;
    collection.deleteOne(cricketPlayer, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postCricketPlayer,getAllCricketPlayers}