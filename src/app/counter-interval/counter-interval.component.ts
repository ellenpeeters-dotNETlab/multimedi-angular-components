import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-interval',
  templateUrl: './counter-interval.component.html',
  styleUrls: ['./counter-interval.component.css']
})
export class CounterIntervalComponent implements OnInit {
  public counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
    }, 0.2);
  }
}
