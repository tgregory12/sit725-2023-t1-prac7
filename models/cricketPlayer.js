let client = require('../dbConnection');

let collection = client.db().collection('CricketPlayers');

function postCricketPlayer(cricketPlayer, callback) {
    collection.insertOne(cricketPlayer,callback);
}

function getAllCricketPlayers(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postCricketPlayer,getAllCricketPlayers}