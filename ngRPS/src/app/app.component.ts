import { Component } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '🆖 ✊🏽Rock 📰Paper ✂Scissors';
  
  player = {
    loaded: false,
    choices: ["rock", "paper", "scissors"],
    choice: ""
  }
  
  setChoice(choice) { 
    console.log(choice);
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
