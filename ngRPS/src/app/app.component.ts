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
  title = '🆖 R✊🏽ck P📰per S✂issors';

  constructor(private playerService: PlayerService){}
  
  public player = {
    loaded: false,
    choice: "",
    wins: 0,
    loses: 0,
    ties: 0,
    matchResult: "CHOOSE"
  }
  
  match(move: string) {
    if (!move) { return; }
    this.playerService.playerMoves(move)
                    .subscribe(
                      matchNow => this.processMatch(matchNow),
                      error =>  this.errorMessage = <any>error);
  }
  
  processMatch(matchNow) {
    this.errorMessage = "";
    matchNow => this.matches.push(matchNow);
    matchNow.result === "win" ? this.player.wins++ : 
      matchNow.result === "lose" ? this.player.loses++ :
        this.player.ties++;
    this.player.matchResult = matchNow.result;
  }
  
  setChoice(choice: string) { 
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
