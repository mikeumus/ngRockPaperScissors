import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '🆖 ✊🏽Rock 📰Paper ✂Scissors';
  loaded = false;
  choices = ["rock", "paper", "scissors"];
  
  setChoice(choice) { 
    console.log(choice);
    if(choice === "rock"){
      loaded = true;
      choice = "rock";
    }
  }
}
