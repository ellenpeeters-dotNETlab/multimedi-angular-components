import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public add(): void {
    this.counter++;
  }

  public substract(): void {
    this.counter--;
  }
}
