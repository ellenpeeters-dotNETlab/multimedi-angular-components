import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  public currentTime: string;
  public currentDateTime: Date = new Date();
  
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = new Date();
      this.currentTime = this.datePipe.transform(this.currentDateTime, "HH:mm:ss");
    }, 1);
  }
}
