import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent implements OnInit {
  public randomNumber: number = _.random(1, 100);
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.randomNumber = _.random(1, 100);
    }, 2);
  }
}
