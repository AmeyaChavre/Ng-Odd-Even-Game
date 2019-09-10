import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalFired = new EventEmitter<number>();
  interval; // declaring a interval property
  lastNumber=0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
  	this.interval = setInterval(() => {
  	this.intervalFired.emit(this.lastNumber+1);
  	this.lastNumber++;
  	}, 1000);
  }

  onGamePause(){

  }

}
