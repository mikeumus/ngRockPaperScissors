import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from './player.service';
import { Player } from './player';
import { Match } from './match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: string;
  public matches: Array<Match> = [];
  mode = 'Observable';
  title = '🆖 Rock Paper S✂issors';
  gameState = 0;

  constructor(private playerService: PlayerService){}
  
  public player = {
    loaded: false,
    choice: "",
    wins: 0,
    loses: 0,
    ties: 0,
    matchResult: "CHOOSE",
    countdownMsg: ""
  }
  
  match(move: string) {
    if (!move) { return; }
    this.playerService.playerMoves(move)
                    .subscribe(
                      matchNow => this.processMatch(matchNow),
                      error =>  this.processError(error);
  }
  
  private processError(error) {
    debugger;
    this.errorMessage = <any>error);
  }
  
  private processMatch(matchNow) {
    this.errorMessage = "";
    matchNow => this.matches.push(matchNow);
    matchNow.result === "win" ? this.player.wins++ : 
      matchNow.result === "lose" ? this.player.loses++ :
        this.player.ties++;
    this.player.matchResult = matchNow.result;
    this.player.choice = '';
  }
  
  public countdown() {
    this.gameState = 2;
    let rps = ["ROCK", "PAPER", "SCISSORS", "SHOOT", ""];
    let offset = 0;
    var countdownPromise = new Promise((resolve) => {
      for(let i=0; i < rps.length; i++) {
        setTimeout(() => {
          this.player.countdownMsg = rps[i];
          if (rps[i] == "") {resolve('Success!')};
        },offset += 505);
      }
    });
    countdownPromise.then(() => {
      this.gameState=3;
    });
  }
  
  setChoice(choice: string) { 
    this.gameState = 1;
    console.log("Players Choice: ", this.player.choice);
    if(choice === "rock"){
      this.player.loaded = true;
      this.player.choice = "rock";
    } else if(choice === "paper"){
      this.player.loaded = true;
      this.player.choice = "paper";
    } else if(choice === "scissors"){
      this.player.loaded = true;
      this.player.choice = "scissors";
    }
  }
  
}
