import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalFired = new EventEmitter<number>();
  interval; // declaring a interval property

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
  	this.interval = setInterval(() => {

  	}, 1000);
  }

  onGamePause(){

  }

}
