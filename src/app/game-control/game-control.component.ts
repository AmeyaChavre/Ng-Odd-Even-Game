import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  interval; // declaring a interval property

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){

  }

  onGamePause(){

  }

}
