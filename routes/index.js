var express = require('express');
var router = express.Router();
var _ = require('lodash');


router.post("/match", function(req, res, next){

  var latency = _.random(500, 1500);

  // simulating network latency
  setTimeout(function(){
    var status, body;
    var playerChoice = req.body.choice || "";
    playerChoice = playerChoice.toLowerCase();

    if (!_.contains(['rock', 'paper', 'scissors'], playerChoice)) {
      status = 400;
      body = { message: "'choice' param must be rock, paper, or scissors" }
      return res.status(status).json(body);
    }

    // Send 500 ISE randomly 1 out of 10 times
    if (_.random(1,10) === 1) {
      return res.status(500).json({message: "Internal Server Error"})
    }

    var computerChoice = _.sample(['rock', 'paper', 'scissors']);
    var result = playGame(playerChoice, computerChoice);

    return res.json({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      result: result
    })
  }, latency)
})



function playGame(me, you) {
  if (me === you) { return "tie"; }

  switch (me) {
    case 'rock':
      return (you === 'scissors') ? 'win' : 'lose';
      break;

    case 'paper':
      return (you === 'rock') ? 'win' : 'lose';
      break;

    case 'scissors':
      return (you === 'paper') ? 'win' : 'lose';
      break;

  }
}

module.exports = router;
