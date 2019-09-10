import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = []; // array to store odd numbers
  evenNumbers: number[] = []; // array to store even numbers

	onIntervalFired(firedNumber: number){
		//console.log(firedNumber);
	}

}
