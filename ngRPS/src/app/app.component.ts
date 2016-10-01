import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from './player.service';
import { Player } from './player';
import { Match } from './match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string;
  matches: Match[];
  mode = 'Observable';
  title = '🆖 ✊🏽Rock 📰Paper ✂Scissors';

  constructor(private playerService: PlayerService){}
  
  ngOnInit() { /*this.getMatches();*/ }
  
  public player = {
    loaded: false,
    choices: ["rock", "paper", "scissors"],
    choice: ""
  }
  
  // match(choice: string): void {
  //   choice = choice.trim();
  //   if (!choice) { return; }
  //   this.playerService.playerMoves(choice);
  // }
  
  // getMatches() {
  //   this.playerService.getMatches()
  //                   .then(
  //                     matches => this.matches = matches,
  //                     // console.log('getMatches'),
  //                     error =>  this.errorMessage = <any>error);
  // }
  
  match(move: string) {
    if (!move) { return; }
    this.playerService.playerMoves(move)
                    .subscribe(
                      match  => this.matches.push(match),
                      // console.log("hit!"),
                      error =>  this.errorMessage = <any>error);
  }
  
  // match(move: string): void {
  //   if (!move) { return; }
  //   this.playerService.playerMoves(move)
  //     .then(hero => {
  //       this.matches.push();
  //       // this.selectedHero = null;
  //   });
  // }
  
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
