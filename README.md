# Rock Paper Scissors

This repository contains a simple server for playing Rock Paper Scissors. You will be building a client-side GUI to play the game against the server. From the command line, run `npm install` to install dependencies, then start the server with `npm start`. You can access the game's GUI at `http://localhost:3000`

## Requirements

You will need node.js with npm installed on your system.  Instructions for installation can be found at https://nodejs.org/

## The API

To play the game, make a POST request to `http://localhost:3000/match` with a single body parameter, `choice`, the value of which should be either "rock", "paper", or "scissors". The server will randomly choose one of those three options to play against your choice and return the results of the game as a JSON object with the following properties:

    playerChoice   : [your choice]
    computerChoice : [rock|paper|scissors]
    result         : [win|lose|tie]

The server will return a status of 400 if the `choice` parameter is omitted or does not equal "rock", "paper", or "scissors", Additionally, every request has a 1 in 10 chance of returning a 500 Internal Server Error.  Your application should deal with these responses gracefully.

You can test the API using cURL thusly:

    $ curl -X POST -d choice=[rock|paper|scissors] http://localhost:3000/match

## The GUI

All front end assets can be found in the `public` directory. Please use a AngularJS to build a single page application for playing the game. You may structure your Angular app as you like and you may add to or modify any of the code in here. Visually, the design does not have to be perfect, but the game should look presentable.

#### Requirements

* All requests to the server should be asynchronous. That is, there should never be a full page refresh.

* Play button should be disabled (with an appropriate graphical cue) until the player makes a choice.

* Player should see an indication of their choice before clicking the Play button

* Clicking the play button should submit the user's choice to the server, and the response should update the GUI with the computer's choice and the result of the game.

* "Computer Choice", "Result", and "Play Again" elements should be hidden until the response from the server is received and the game is over.

* Wins should increment the player's score and losses should increment the computer's score. Scores should not change for a tie.

* Your application should demonstrate a solid understanding of MVC and event-driven design patterns.

* Your application should deal with server errors gracefully.

## Questions?

If you have any questions while working on the test, feel free to contact Anthony Sgueglia <anthony@domandtom.com>.
