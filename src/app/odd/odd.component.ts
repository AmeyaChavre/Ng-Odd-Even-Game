import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  oddNumbers = []; // array to store odd numbers
  evenNumbers = []; // array to store even numbers

  @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
